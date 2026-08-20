import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";

import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();

    if (hasLocale(routing.locales, paramValue)) {
      // Keep the callback aligned with the official next-intl example.
      // eslint-disable-next-line no-param-reassign
      locale = paramValue;
    } else {
      notFound();
    }
  }

  return {
    locale,
    messages: {
      ...(await import(`../../messages/${locale}/home.json`)).default,
      ...(await import(`../../messages/${locale}/auth.json`)).default,
      ...(await import(`../../messages/${locale}/not-found.json`)).default,
    },
  };
});
