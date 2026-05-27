import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { hashPassword } from '@/src/lib/auth/password';
import { registerSchema, sanitizeObject } from '@/src/lib/validation/auth';
import { rateLimit } from '@/src/middleware/security';
import { csrfProtection } from '@/src/middleware/csrf';
import { z } from 'zod';

export async function POST(request: NextRequest) {
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    try {
        // Rate limiting
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        const rateLimitResult = rateLimit(`register:${ip}`, 5, 15 * 60 * 1000);

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { error: 'Too many registration attempts. Please try again later.' },
                {
                    status: 429,
                    headers: {
                        'X-RateLimit-Limit': '5',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
                    }
                }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);

        const validatedData = registerSchema.parse(sanitizedBody);

        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: validatedData.email },
                    { username: validatedData.username },
                ],
            },
        });

        if (existingUser) {
            if (existingUser.email === validatedData.email) {
                return NextResponse.json(
                    { error: 'Email already registered' },
                    { status: 409 }
                );
            }
            if (existingUser.username === validatedData.username) {
                return NextResponse.json(
                    { error: 'Username already taken' },
                    { status: 409 }
                );
            }
        }

        // Hash password
        const hashedPassword = await hashPassword(validatedData.password);

        // Create user
        const user = await prisma.user.create({
            data: {
                email: validatedData.email,
                username: validatedData.username,
                password: hashedPassword,
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
            },
            select: {
                id: true,
                email: true,
                username: true,
                firstName: true,
                lastName: true,
                createdAt: true,
            },
        });

        return NextResponse.json(
            {
                message: 'User registered successfully',
                user,
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
