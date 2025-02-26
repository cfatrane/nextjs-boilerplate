import createMiddleware from "next-intl/middleware";

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  return handleI18nRouting(req);
});

export const config = {
  matcher: [
    // Match only internationalized pathnames
    "/",
    "/(en|fr)/:path*",
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
