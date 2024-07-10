import { setCookie } from "cookies-next";
import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const rand = Math.random().toString(36).substring(2);
  const rand2 = Math.random().toString(36).substring(2);

  setCookie("token", rand + rand2, { res, req });
  //hasCookie('token', { req, res });
  // deleteCookie('token', { res, req });
  //getCookie('token', { res, req });
  // getCookies({ res, req });

  // console.log(req.nextUrl.pathname, req)

  return res;
}

export const config = {
  matcher: "/",
};
