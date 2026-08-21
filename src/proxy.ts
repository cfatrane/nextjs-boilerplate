import { NextResponse } from "next/server";

import createMiddleware from "next-intl/middleware";

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
  "/:locale/dashboard(.*)",
  "/api/me(.*)",
]);
const isWebhookRoute = createRouteMatcher(["/api/webhooks/clerk"]);

export default clerkMiddleware(async (auth, req) => {
  if (isWebhookRoute(req)) return NextResponse.next();

  if (isProtectedRoute(req)) await auth.protect();

  if (req.nextUrl.pathname.startsWith("/api/")) return NextResponse.next();

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
