import { notFound } from "next/navigation";

import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "fr", "de"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/home.json`)).default,
      ...(await import(`../messages/${locale}/auth.json`)).default,
    },
  };
});
