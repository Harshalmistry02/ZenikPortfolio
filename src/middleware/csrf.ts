import { NextRequest, NextResponse } from 'next/server';

/**
 * Generate CSRF token
 */
export function generateCsrfToken(): string {
    // Use Web Crypto API for Edge Runtime compatibility
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify CSRF token
 */
export function verifyCsrfToken(request: NextRequest): boolean {
    // Skip CSRF check for GET, HEAD, OPTIONS
    if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
        return true;
    }

    const tokenFromHeader = request.headers.get('x-csrf-token');
    const tokenFromCookie = request.cookies.get('csrfToken')?.value;

    if (!tokenFromHeader || !tokenFromCookie) {
        return false;
    }

    return tokenFromHeader === tokenFromCookie;
}

/**
 * CSRF protection middleware
 */
export function csrfProtection(request: NextRequest): NextResponse | null {
    if (!verifyCsrfToken(request)) {
        return NextResponse.json(
            { error: 'Invalid CSRF token' },
            { status: 403 }
        );
    }

    return null;
}
