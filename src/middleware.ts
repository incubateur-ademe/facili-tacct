import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie, setCookie, deleteCookie, hasCookie, getCookies } from 'cookies-next';
import { cookies } from 'next/headers';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  var rand = Math.random().toString(36).substring(2);
  var rand2 = Math.random().toString(36).substring(2);

  console.log(res)
  setCookie('token', rand + rand2, { res, req });
  //hasCookie('token', { req, res });
  // deleteCookie('token', { res, req });
  //getCookie('token', { res, req });
  // getCookies({ res, req });

  return res;
}

export const config = {
  matcher: '/',
}