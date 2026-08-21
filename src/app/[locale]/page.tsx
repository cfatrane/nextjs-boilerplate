import Image from "next/image";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex w-full justify-center border-b border-gray-300 bg-linear-to-b from-zinc-200 pt-8 pb-6 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/[locale]/page.tsx</code>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-linear-to-t from-white via-white lg:static lg:size-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>By </span>

            <Image
              alt="Vercel Logo"
              className="dark:invert"
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <div className="relative -z-1 flex place-items-center before:absolute before:h-75 before:w-full before:-translate-x-1/2 before:rounded-full before:bg-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-45 after:w-full after:translate-x-1/3 after:bg-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-120 sm:after:w-60 lg:before:h-90 dark:before:bg-linear-to-br dark:before:from-transparent dark:before:to-blue-700 dark:before:opacity-10 dark:after:from-sky-900 dark:after:via-[#0141ff] dark:after:opacity-40">
        <Image
          alt="Next.js Logo"
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          height={37}
          priority
          src="/next.svg"
          width={180}
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            <span>{t("Docs.title")} </span>

            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t("Docs.text")}
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            <span>{t("Learn.title")} </span>

            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t("Learn.text")}
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            <span>{t("Templates.title")} </span>

            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t("Templates.text")}
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            <span>{t("Deploy.title")} </span>

            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

          <p className="m-0 max-w-[30ch] text-sm text-balance opacity-50">
            {t("Deploy.text")}
          </p>
        </a>
      </div>
    </main>
  );
}
