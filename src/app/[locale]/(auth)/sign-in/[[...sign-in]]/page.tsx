import { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { SignIn } from "@clerk/nextjs";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("auth");

  return {
    title: t("SignIn.Metadata"),
  };
}

export default async function SignInPage() {
  return <SignIn />;
}
