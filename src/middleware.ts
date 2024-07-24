import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/config";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix: "always",
  defaultLocale,
});

const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Don't run middleware on static files
    "/", // Run middleware on index page
    "/(api|trpc)(.*)",
  ], // Run middleware on API routes
};
