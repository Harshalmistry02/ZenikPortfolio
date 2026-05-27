import { prisma } from '@/src/lib/prisma';

const MAX_LOGIN_ATTEMPTS = parseInt(process.env.MAX_LOGIN_ATTEMPTS || '5', 10);
const LOGIN_LOCKOUT_DURATION = parseInt(process.env.LOGIN_LOCKOUT_DURATION || '900000', 10); // 15 minutes

interface RateLimitResult {
    allowed: boolean;
    remainingAttempts?: number;
    lockoutEndsAt?: Date;
}

/**
 * Check if user is rate limited for login attempts
 */
export async function checkLoginRateLimit(email: string, ipAddress: string): Promise<RateLimitResult> {
    const lockoutTime = new Date(Date.now() - LOGIN_LOCKOUT_DURATION);

    // Get recent failed login attempts
    const recentAttempts = await prisma.loginAttempt.findMany({
        where: {
            email,
            successful: false,
            createdAt: {
                gte: lockoutTime,
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    const failedAttempts = recentAttempts.length;

    if (failedAttempts >= MAX_LOGIN_ATTEMPTS) {
        const oldestRelevantAttempt = recentAttempts[recentAttempts.length - 1];
        const lockoutEndsAt = new Date(oldestRelevantAttempt.createdAt.getTime() + LOGIN_LOCKOUT_DURATION);

        if (new Date() < lockoutEndsAt) {
            return {
                allowed: false,
                lockoutEndsAt,
            };
        }
    }

    return {
        allowed: true,
        remainingAttempts: MAX_LOGIN_ATTEMPTS - failedAttempts,
    };
}

/**
 * Record a login attempt
 */
export async function recordLoginAttempt(
    email: string,
    ipAddress: string,
    userAgent: string | null,
    successful: boolean,
    userId?: string
): Promise<void> {
    await prisma.loginAttempt.create({
        data: {
            email,
            ipAddress,
            userAgent,
            successful,
            userId,
        },
    });

    // Clean up old login attempts (older than 24 hours)
    const cleanupTime = new Date(Date.now() - 24 * 60 * 60 * 1000);
    await prisma.loginAttempt.deleteMany({
        where: {
            createdAt: {
                lt: cleanupTime,
            },
        },
    });
}

/**
 * Clear failed login attempts for a user (after successful login)
 */
export async function clearFailedLoginAttempts(email: string): Promise<void> {
    await prisma.loginAttempt.deleteMany({
        where: {
            email,
            successful: false,
        },
    });
}
