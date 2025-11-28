import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  const { pathname } = request.nextUrl;
  console.log("Middleware token", token); 
  // Debug logging for production
  if (process.env.NODE_ENV === "production") {
    console.log("Middleware - Path:", pathname, "Has Token:", !!token);
  }

  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path*"],
};