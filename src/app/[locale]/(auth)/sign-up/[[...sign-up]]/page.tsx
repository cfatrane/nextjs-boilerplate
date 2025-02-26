import { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { SignUp } from "@clerk/nextjs";

import { Locale } from "@/i18n/routing";

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const {locale} = params;

  const t = await getTranslations({ locale, namespace: "auth" });

  return {
    title: t("SignUp.Metadata"),
  };
}

export default async function SignUpPage(
  props: Readonly<{
    params: Params;
  }>,
) {
  const params = await props.params;
  const {locale} = params;

  setRequestLocale(locale);

  return <SignUp />;
}
