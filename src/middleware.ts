import { NextResponse } from "next/server";

import createIntlMiddleware from "next-intl/middleware";

import { auth } from "@/auth";
import { locales } from "@/i18n";

import { HEADER_ITEMS } from "@/routes/protectedRoutes";

// * Link : https://next-intl-docs.vercel.app/docs/routing/middleware#example-auth-js

// 1. Specify protected and public routes
const protectedRoutes = HEADER_ITEMS.map((item) => item.href); // Routes that require authentication
const publicRoutes = ["/signin", "/signup", "/forgot-password"]; // Routes that don't require authentication
const baseRoute = "/dashboard";

const pathNameRegex = (pages: string[]): RegExp => {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${pages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );

  return publicPathnameRegex;
};

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});

// Combined middleware function
export default auth(async (req) => {
  const { pathname } = req.nextUrl;

  // Apply i18n middleware
  const response = intlMiddleware(req);

  // Check if the current route is protected or public
  const protectedPathnameRegex = pathNameRegex(protectedRoutes);
  const publicPathnameRegex = pathNameRegex(publicRoutes);

  const isProtectedRoute = protectedPathnameRegex.test(pathname);
  const isPublicRoute = publicPathnameRegex.test(pathname);

  const isLoggedIn = !!req.auth;

  // console.log(
  //   `Redirecting: isLoggedIn=${isLoggedIn}, isProtectedRoute=${isProtectedRoute}, isPublicRoute=${isPublicRoute}, path=${pathname}`,
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

  if (pathname === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL(baseRoute, req.nextUrl));
  }

  return response;
});

// Combined config
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
