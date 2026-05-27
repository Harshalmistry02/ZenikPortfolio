import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessToken, JWTPayload } from '@/src/lib/auth/jwt';
import { prisma } from '@/src/lib/prisma';

export interface AuthenticatedRequest extends NextRequest {
    user?: JWTPayload;
}

/**
 * Extract token from request
 */
function extractToken(request: NextRequest): string | null {
    // Check Authorization header
    const authHeader = request.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }

    // Check cookies
    const cookieToken = request.cookies.get('accessToken')?.value;
    if (cookieToken) {
        return cookieToken;
    }

    return null;
}

/**
 * Authentication middleware
 */
export async function authenticate(request: NextRequest): Promise<{
    authenticated: boolean;
    user?: JWTPayload;
    error?: string;
}> {
    try {
        const token = extractToken(request);

        if (!token) {
            return { authenticated: false, error: 'No token provided' };
        }

        // Verify token
        const payload = verifyAccessToken(token);

        // Check if user still exists and is active
        const user = await prisma.user.findUnique({
            where: { id: payload.userId },
            select: { id: true, isActive: true },
        });

        if (!user || !user.isActive) {
            return { authenticated: false, error: 'User not found or inactive' };
        }

        return { authenticated: true, user: payload };
    } catch (error) {
        return { authenticated: false, error: 'Invalid or expired token' };
    }
}

/**
 * Require authentication middleware
 */
export async function requireAuth(request: NextRequest): Promise<NextResponse | JWTPayload> {
    const { authenticated, user, error } = await authenticate(request);

    if (!authenticated) {
        return NextResponse.json(
            { error: error || 'Unauthorized' },
            { status: 401 }
        );
    }

    return user!;
}
