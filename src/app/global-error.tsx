"use client";

import { Button } from "@/components/ui/button";

import { Locale } from "@/i18n/routing";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
  params: { locale },
}: {
  error: Error & { digest?: string };
  reset: () => void;
  params: { locale: Locale };
}) {
  return (
    // global-error must include html and body tags
    <html lang={locale}>
      <body>
        <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              Something went wrong!
            </h2>

            <p className="mt-6 text-base leading-7 text-muted-foreground">
              {error.message}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Try again
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
