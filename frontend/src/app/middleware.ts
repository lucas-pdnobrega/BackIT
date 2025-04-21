import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const isAuthPage = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup';

    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (!token && request.nextUrl.pathname.startsWith('/home')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home/:path*', '/login', '/signup'],
  };