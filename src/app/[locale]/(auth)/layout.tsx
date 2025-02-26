import React from "react";

import type { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/routing";

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "auth" });

  return {
    title: { template: `%s | ${t("Metadata")}`, default: t("Metadata") },
  };
}

export default async function AuthLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <div className="py-12">{children}</div>;
}
