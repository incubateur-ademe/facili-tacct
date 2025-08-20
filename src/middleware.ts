import type { JWT } from 'next-auth/jwt';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface MiddlewareTokenOptions {
  req: NextRequest;
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  // Redirect /ressources/articles?title=... to /ressources
  if (
    req.nextUrl.pathname === '/ressources/articles' &&
    req.nextUrl.searchParams.has('title')
  ) {
    return NextResponse.redirect(new URL('/ressources', req.url));
  }

  if (req.nextUrl.pathname === '/donnees-territoriales') {
    const newUrl = new URL(req.url);
    newUrl.pathname = '/donnees';
    return NextResponse.redirect(newUrl);
  }
  // Only protect /sandbox/* routes
  if (req.nextUrl.pathname.startsWith('/sandbox/')) {
    const token: JWT | null = await getToken({ req } as MiddlewareTokenOptions);
    if (!token) {
      // Redirect unauthenticated users to the home page
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/ressources',
    '/sandbox/:user*',
    '/ressources/articles',
    '/donnees-territoriales',
  ],
};
