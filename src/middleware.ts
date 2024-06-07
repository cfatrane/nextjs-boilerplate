import { NextResponse } from "next/server";

import createIntlMiddleware from "next-intl/middleware";

import { auth } from "@/auth";

// * Link : https://next-intl-docs.vercel.app/docs/routing/middleware#example-auth-js

// 1. Specify protected and public routes
const protectedRoutes = ["/", "/user"]; // Routes that require authentication
const publicRoutes = ["/signin", "/signup", "/forgot-password"]; // Routes that don't require authentication
const baseRoute = "/dashboard";

// Create i18n middleware
const i18nMiddleware = createIntlMiddleware({
  locales: ["en", "fr", "de"],
  localePrefix: "as-needed",
  defaultLocale: "en",
});

// Combined middleware function
export default auth(async (req) => {
  const path = req.nextUrl.pathname;

  // Apply i18n middleware
  const response = i18nMiddleware(req);

  // Check if the current route is protected or public
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const isLoggedIn = !!req.auth;

  // console.log(
  //   `Redirecting: isLoggedIn=${isLoggedIn}, isProtectedRoute=${isProtectedRoute}, isPublicRoute=${isPublicRoute}, path=${path}`
  // );

  // Redirect to /signin if the user is not authenticated
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  // Redirect to baseRoute if the user is authenticated
  if (
    isPublicRoute &&
    isLoggedIn &&
    !req.nextUrl.pathname.startsWith(baseRoute)
  ) {
    return NextResponse.redirect(new URL(baseRoute, req.nextUrl));
  }

  if (path === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL(baseRoute, req.nextUrl));
  }

  return response;
});

// Combined config
export const config = {
  matcher: [
    "/",
    "/((?!api|_next|.*\\..*).*)",
    // "/(de|fr|en)/:path*",
    // "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};
