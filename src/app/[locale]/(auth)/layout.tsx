import React from "react";

import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("auth");

  return {
    title: { template: `%s | ${t("Metadata")}`, default: t("Metadata") },
  };
}

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex grow items-center justify-center py-12">
      {children}
    </div>
  );
}
