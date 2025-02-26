import { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { SignIn } from "@clerk/nextjs";

import { Locale } from "@/i18n/routing";

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const {locale} = params;

  const t = await getTranslations({ locale, namespace: "auth" });

  return {
    title: t("SignIn.Metadata"),
  };
}

export default async function SignInPage(
  props: Readonly<{
    params: Params;
  }>,
) {
  const params = await props.params;
  const {locale} = params;

  setRequestLocale(locale);

  return (
    <SignIn
      appearance={{
        elements: {
          footerAction__signIn: "flex flex-col items-center justify-center",
        },
      }}
    />
  );
}
