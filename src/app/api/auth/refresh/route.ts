import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { verifyRefreshToken, generateAccessToken, generateRefreshToken } from '@/src/lib/auth/jwt';
import { csrfProtection } from '@/src/middleware/csrf';

export async function POST(request: NextRequest) {
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    try {
        // Get refresh token from cookie or body
        const cookieToken = request.cookies.get('refreshToken')?.value;
        const body = await request.json().catch(() => ({}));
        const refreshToken = body.refreshToken || cookieToken;

        if (!refreshToken) {
            return NextResponse.json(
                { error: 'Refresh token required' },
                { status: 401 }
            );
        }

        // Verify refresh token
        const payload = verifyRefreshToken(refreshToken);

        // Check if refresh token exists and is not revoked
        const storedToken = await prisma.refreshToken.findUnique({
            where: { token: refreshToken },
            include: { user: true },
        });

        if (!storedToken || storedToken.isRevoked) {
            return NextResponse.json(
                { error: 'Invalid or revoked refresh token' },
                { status: 401 }
            );
        }

        // Check if token is expired
        if (new Date() > storedToken.expiresAt) {
            return NextResponse.json(
                { error: 'Refresh token expired' },
                { status: 401 }
            );
        }

        // Check if user is active
        if (!storedToken.user.isActive) {
            return NextResponse.json(
                { error: 'Account is deactivated' },
                { status: 403 }
            );
        }

        // Generate new tokens
        const tokenPayload = {
            userId: storedToken.user.id,
            email: storedToken.user.email,
            username: storedToken.user.username,
        };

        const newAccessToken = generateAccessToken(tokenPayload);
        const newRefreshToken = generateRefreshToken(tokenPayload);

        // Revoke old refresh token
        await prisma.refreshToken.update({
            where: { id: storedToken.id },
            data: { isRevoked: true },
        });

        // Store new refresh token
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await prisma.refreshToken.create({
            data: {
                token: newRefreshToken,
                userId: storedToken.user.id,
                expiresAt,
            },
        });

        // Create response
        const response = NextResponse.json({
            message: 'Token refreshed successfully',
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });

        // Set secure cookies
        response.cookies.set('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60,
            path: '/',
        });

        response.cookies.set('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60,
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Token refresh error:', error);
        return NextResponse.json(
            { error: 'Invalid or expired refresh token' },
            { status: 401 }
        );
    }
}
