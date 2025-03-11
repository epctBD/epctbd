// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define protected routes for logged-in users
  const protectedRoutes = ["/admin", "/admin/dashboard", "/admin/team-member"];

  // If the user is not logged in and trying to access a protected route
  if (
    !token &&
    protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|epct-main-logo.png).*)"], // Protect all routes except public files
};
