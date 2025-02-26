import { Pathnames } from "next-intl/navigation";

export const defaultLocale = "fr";
export const locales = ["en", "fr"] as const;

export const protectedPathnames = {
  "/": "/",
  "/finalisation": "/dashboard",
  "/inspirations": "/settings",
  "/user": "/user",
} satisfies Pathnames<typeof locales>;

export const publicPathnames = {
  "/signin": "/signin",
  "/signup": "/signup",
  "/forgot-password": "/forgot-password",
} satisfies Pathnames<typeof locales>;

export const pathnames = {
  "/": "/",
  "/signin": "/signin",
  "/signup": "/signup",
  "/forgot-password": "/forgot-password",
  "/user": "/dashboard",
  "/inspirations": "/settings",
  "/story": "/user",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
