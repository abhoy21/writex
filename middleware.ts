import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Debug logging for production
  if (process.env.NODE_ENV === "production") {
    console.log("Middleware - Path:", pathname, "Is Logged In:", isLoggedIn);
  }


  if (!isLoggedIn && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path*"],
};