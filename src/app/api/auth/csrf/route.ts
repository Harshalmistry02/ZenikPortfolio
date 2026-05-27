import { NextResponse } from 'next/server';
import { generateCsrfToken } from '@/src/middleware/csrf';

export async function GET() {
    const csrfToken = generateCsrfToken();

    const response = NextResponse.json({
        csrfToken,
    });

    // Set CSRF token in cookie
    response.cookies.set('csrfToken', csrfToken, {
        httpOnly: false, // Needs to be accessible by JavaScript
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour
        path: '/',
    });

    return response;
}
