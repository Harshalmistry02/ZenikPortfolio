import jwt from 'jsonwebtoken';

function getSecrets() {
    if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
        throw new Error('JWT_SECRET and JWT_REFRESH_SECRET must be set in environment variables');
    }
    return {
        secret: process.env.JWT_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
    };
}

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

export interface JWTPayload {
    userId: string;
    email: string;
    username: string;
}

/**
 * Generate access token
 */
export function generateAccessToken(payload: JWTPayload): string {
    const { secret } = getSecrets();
    return jwt.sign(payload, secret, {
        expiresIn: JWT_EXPIRES_IN,
        issuer: 'zenik-portfolio',
        audience: 'zenik-users',
    } as any);
}

/**
 * Generate refresh token
 */
export function generateRefreshToken(payload: JWTPayload): string {
    const { refreshSecret } = getSecrets();
    return jwt.sign(payload, refreshSecret, {
        expiresIn: JWT_REFRESH_EXPIRES_IN,
        issuer: 'zenik-portfolio',
        audience: 'zenik-users',
    } as any);
}

/**
 * Verify access token
 */
export function verifyAccessToken(token: string): JWTPayload | null {
    try {
        const { secret } = getSecrets();
        return jwt.verify(token, secret, {
            issuer: 'zenik-portfolio',
            audience: 'zenik-users',
        }) as JWTPayload;
    } catch (error) {
        return null;
    }
}

/**
 * Verify refresh token
 */
export function verifyRefreshToken(token: string): JWTPayload {
    try {
        const { refreshSecret } = getSecrets();
        return jwt.verify(token, refreshSecret, {
            issuer: 'zenik-portfolio',
            audience: 'zenik-users',
        }) as JWTPayload;
    } catch (error) {
        throw new Error('Invalid or expired refresh token');
    }
}

/**
 * Decode token without verification (for debugging)
 */
export function decodeToken(token: string): any {
    return jwt.decode(token);
}
