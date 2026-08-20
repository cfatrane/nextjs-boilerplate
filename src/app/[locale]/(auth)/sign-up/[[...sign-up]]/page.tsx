import { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { SignUp } from "@clerk/nextjs";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("auth");

  return {
    title: t("SignUp.Metadata"),
  };
}

export default async function SignUpPage() {
  return <SignUp />;
}
