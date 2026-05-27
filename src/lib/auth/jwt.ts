import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';
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
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
        issuer: 'zenik-portfolio',
        audience: 'zenik-users',
    } as any);
}

/**
 * Generate refresh token
 */
export function generateRefreshToken(payload: JWTPayload): string {
    return jwt.sign(payload, JWT_REFRESH_SECRET, {
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
        return jwt.verify(token, JWT_SECRET, {
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
        return jwt.verify(token, JWT_REFRESH_SECRET, {
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
