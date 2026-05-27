import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { verifyPassword } from '@/src/lib/auth/password';
import { generateAccessToken, generateRefreshToken } from '@/src/lib/auth/jwt';
import { loginSchema, sanitizeObject } from '@/src/lib/validation/auth';
import {
    checkLoginRateLimit,
    recordLoginAttempt,
    clearFailedLoginAttempts
} from '@/src/lib/auth/rateLimit';
import { csrfProtection } from '@/src/middleware/csrf';
import { z } from 'zod';

export async function POST(request: NextRequest) {
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    const ip = request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        'unknown';
    const userAgent = request.headers.get('user-agent');

    try {
        // Parse and validate request body
        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);
        const validatedData = loginSchema.parse(sanitizedBody);

        // Check rate limit
        const rateLimitResult = await checkLoginRateLimit(validatedData.email, ip);

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                {
                    error: 'Too many failed login attempts. Please try again later.',
                    lockoutEndsAt: rateLimitResult.lockoutEndsAt
                },
                { status: 429 }
            );
        }

        // Find user
        const user = await prisma.user.findUnique({
            where: { email: validatedData.email },
        });

        if (!user) {
            await recordLoginAttempt(validatedData.email, ip, userAgent, false);
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Check if user is active
        if (!user.isActive) {
            return NextResponse.json(
                { error: 'Account is deactivated' },
                { status: 403 }
            );
        }

        // Verify password
        const isPasswordValid = await verifyPassword(validatedData.password, user.password);

        if (!isPasswordValid) {
            await recordLoginAttempt(validatedData.email, ip, userAgent, false, user.id);
            return NextResponse.json(
                {
                    error: 'Invalid email or password',
                    remainingAttempts: rateLimitResult.remainingAttempts! - 1
                },
                { status: 401 }
            );
        }

        // Clear failed login attempts
        await clearFailedLoginAttempts(validatedData.email);

        // Record successful login
        await recordLoginAttempt(validatedData.email, ip, userAgent, true, user.id);

        // Generate tokens
        const tokenPayload = {
            userId: user.id,
            email: user.email,
            username: user.username,
        };

        const accessToken = generateAccessToken(tokenPayload);
        const refreshToken = generateRefreshToken(tokenPayload);

        // Store refresh token
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id,
                expiresAt,
            },
        });

        // Create session
        await prisma.session.create({
            data: {
                userId: user.id,
                token: accessToken,
                ipAddress: ip,
                userAgent,
                expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
            },
        });

        // Create response with secure cookies
        const response = NextResponse.json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            accessToken,
            refreshToken,
        });

        // Set secure HTTP-only cookies
        response.cookies.set('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60, // 15 minutes
            path: '/',
        });

        response.cookies.set('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60, // 7 days
            path: '/',
        });

        return response;
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
