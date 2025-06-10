import type { JWT } from 'next-auth/jwt';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface MiddlewareTokenOptions {
  req: NextRequest;
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  // Only protect /sandbox/* routes
  if (req.nextUrl.pathname.startsWith('/sandbox/')) {
    const token: JWT | null = await getToken({ req } as MiddlewareTokenOptions);
    if (!token) {
      // Redirect unauthenticated users to the home page
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  // Let next-auth handle other protected routes (like /api/ressources)
  return NextResponse.next();
}

export const config = {
  // Protect all /sandbox/* routes
  matcher: ['/api/ressources', '/sandbox/:user*'],
};
