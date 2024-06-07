import Link from "next/link";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="grid min-h-screen place-items-center items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page non trouvée
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Désolé, nous n’avons pas trouvé la page que vous recherchez.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button>Retour à la page principale</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
