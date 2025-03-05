import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
          {t("title")}
        </h1>

        <p className="mt-6 text-base leading-7 text-muted-foreground">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button>{t("return")}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
