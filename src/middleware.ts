import { NextRequest, NextResponse } from 'next/server';
import { securityHeaders, corsHeaders } from '@/src/middleware/security';

export function middleware(request: NextRequest) {
    // Create response
    let response = NextResponse.next();

    // Apply security headers
    response = securityHeaders(response);

    // Apply CORS headers
    response = corsHeaders(request, response);

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        return new NextResponse(null, {
            status: 204,
            headers: response.headers,
        });
    }

    return response;
}

export const config = {
    matcher: [
        '/api/:path*',
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
