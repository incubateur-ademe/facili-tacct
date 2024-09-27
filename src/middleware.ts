// import { setCookie } from "cookies-next";
// import { type NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const rand = Math.random().toString(36).substring(2);
//   const rand2 = Math.random().toString(36).substring(2);

//   setCookie("token", rand + rand2, { res, req });

//   return res;
// }

// export const config = {
//   matcher: "/",
// };

export { default } from "next-auth/middleware";

export const config = {
  // specify the route you want to protect
  matcher: ["/ressources"],
};
