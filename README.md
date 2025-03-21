# Boilerplate Next Js 15 WIP

![Github Banner 1280x640](https://github.com/cfatrane/nextjs-boilerplate/assets/17748314/392e9faa-349e-4a31-b550-b72c89709829)

## Table of Contents 📋

WIP

- [Features](https://github.com/cfatrane/nextjs-boilerplate?tab=readme-ov-file#features-%EF%B8%8F)
- [Project Structure](https://github.com/cfatrane/nextjs-boilerplate?tab=readme-ov-file#project-structure-)

## Features 🛠️

- [**Clerk**](https://clerk.com/docs) : Clerk supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.
- [**Commitlint**](https://commitlint.js.org/) : Commit conventions allow your team to add more semantic meaning to your git history. This e.g. includes type, scope or breaking changes.
- [**Husky** 🐶](https://typicode.github.io/husky/) : Automatically lint your commit messages, code, and run tests upon committing or pushing.
- [**i18n**](https://next-intl-docs.vercel.app/) : The process of designing and developing software so it can be adapted for users of different cultures and languages
- [**Jest**](https://jestjs.io/) : For unit and integration testing
- [**ESlint**](https://eslint.org/) : Statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- [**Next Themes**](https://github.com/pacocoursey/next-themes) : An abstraction for themes in your React app.
- [**Prettier**](https://prettier.io/) : An opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- [**Prisma**](https://www.prisma.io/docs/orm) : Prisma ORM is an open-source next-generation ORM
- [**React Hook Form**](https://react-hook-form.com/) : A library that helps you validate forms in React.
- [**Shadcn**](https://ui.shadcn.com/) : A collection of beautifully designed, accessible, and customizable React components that you can use to build modern web applications with Next. js.
- [**Tailwind**](https://tailwindcss.com/) : A utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.
- [**VSCode**](https://marketplace.visualstudio.com/vscode) : Configuration file and recommended extensions
- [**Vercel**](https://vercel.com/) : Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
- [**Zod**](https://zod.dev/) : Schema validation with static type inference

### Soon ⏱️

- [**Crowdin**](https://crowdin.com/) : A localization management platform that aims to make the translation process more efficient.
- **Github Actions** : A continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.
- [**Storybook**](https://storybook.js.org/) : A development environment tool that is used as a playground for UI components. It allows us, the developers, to create and test components in isolation.
- [**Sentry**](https://sentry.io/) : For real-time error tracking and monitoring
- [**Posthog**](https://posthog.com/) : PostHog is the only all-in-one platform for product analytics, feature flags, session replays, experiments, and surveys that's built for developer
- [**Google Tag Manager**](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager)
- [**Google Analytics**](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics)

## Getting Started 🤔

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Scripts

```bash
"dev": "next dev",
"dev:turbo": "next dev --turbo",
"build": "next build",
"start": "next start",
"lint": "next lint",
"lint:fix": "next lint --fix",
"format": "prettier --check --ignore-path .gitignore .",
"format:fix": "prettier --write --ignore-path .gitignore .",
"prepare": "husky",
"test": "jest",
"test:watch": "jest --watch",
"prisma:studio": "prisma studio",
"prisma:generate": "prisma generate",
"prisma:validate": "prisma validate",
"prisma:format": "prisma format",
"prisma:migrate:dev": "prisma migrate dev",
"prisma:migrate:reset": "prisma migrate reset",
"prisma:migrate:deploy": "prisma migrate deploy",
"vercel-build": "prisma generate && prisma migrate deploy && next build"
```

## Project Structure 📁

```bash
├── .env.example                # Example environment variables file
├── .gitignore                  # Git ignore file to exclude files and directories from version control
├── .husky                      # Husky configuration for Git hooks
├── .prettierrc                 # Prettier configuration file
├── .vscode                     # VSCode configurations (extensions, settings, etc.)
├── commitlint.config.ts        # Commitlint configuration file
├── components.json             # JSON file for component configurations
├── eslint.config.mjs           # ESLint configuration file
├── jest.config.ts              # Jest configuration file for testing
├── jest.setup.ts               # Jest setup file for initializing tests
├── messages                    # Folder for translation files
│   ├── en                      # English translations
│   └── fr                      # French translations
├── next-env.d.ts               # TypeScript definitions for Next.js
├── next.config.mjs             # Next.js configuration file
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration file
├── prisma                      # Prisma ORM configuration and migrations
│   ├── migrations              # Folder for database migrations
│   └── schema.prisma           # Prisma schema file
├── public                      # Public assets directory
├── src                         # Source code directory
│   ├── app                     # Main application folder
│   │   ├── [locale]            # Locale-specific routes
│   │   │   ├── (auth)          # Authentication-related pages
│   │   │   ├── dashboard       # Dashboard pages
│   │   │   ├── layout.tsx      # Layout component for locale-specific routes
│   │   │   ├── not-found.tsx   # 404 Not Found page for locale-specific routes
│   │   │   ├── page.tsx        # Main page component for locale-specific routes
│   │   │   └── settings        # Settings pages
│   │   ├── favicon.ico         # Favicon for the application
│   │   ├── global-error.tsx    # Global error handling component
│   │   ├── globals.css         # Global CSS styles
│   │   ├── layout.tsx          # Main layout component
│   │   └── not-found.tsx       # 404 Not Found page
│   ├── assets                  # Static assets like images, fonts, and icons
│   ├── constants               # Constant values used across the application
│   ├── components              # Reusable components
│   │   ├── shared              # Shared components
│   │   │   └── ThemeToggle     # Theme toggle component
│   │   ├── theme-provider.tsx  # Theme provider component
│   │   └── ui                  # UI components
│   ├── db                      # Database-related utilities and configurations
│   ├── i18n                    # Internationalization configuration
│   ├── lib                     # Utility functions and libraries
│   ├── middleware.ts           # Middleware configuration
│   ├── services                # Service layer for API calls and business logic
│   ├── types                   # TypeScript type definitions
│   └── utils                   # List of utils functions
├── tailwind.config.ts          # Tailwind CSS configuration file
├── tsconfig.json               # TypeScript configuration file
└── vercel.json                 # Vercel deployment configuration
```

### Clerk

WIP

---

### Commitlint

commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```text
chore: run tests on travis ci
```

```text
fix(server): send cors headers
```

```text
feat(blog): add comment section
```

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- chore: Other changes that don't modify src or test files
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: Reverts a previous commit
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

#### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- When only changing documentation, include `[ci skip]` in the commit title
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐎 `:racehorse:` when improving performance
  - 🚱 `:non-potable_water:` when plugging memory leaks
  - 📝 `:memo:` when writing docs
  - 🐧 `:penguin:` when fixing something on Linux
  - 🍎 `:apple:` when fixing something on macOS
  - 🏁 `:checkered_flag:` when fixing something on Windows
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files
  - 💚 `:green_heart:` when fixing the CI build
  - ✅ `:white_check_mark:` when adding tests
  - 🔒 `:lock:` when dealing with security
  - ⬆️ `:arrow_up:` when upgrading dependencies
  - ⬇️ `:arrow_down:` when downgrading dependencies
  - 👕 `:shirt:` when removing linter warnings

---

### Eslint

WIP

---

### i18n / Translation 🗺️

This project uses the `next-intl` library for internationalization (i18n). Below are the steps to set up and use i18n in this project.

#### Setup

1. **Configuration**:
   The i18n configuration is defined in [`src/i18n/routing.ts`](src/i18n/routing.ts). This file sets up the supported locales and the default locale.

   ```ts
   import { createNavigation } from "next-intl/navigation";
   import { defineRouting } from "next-intl/routing";

   export const routing = defineRouting({
     locales: ["en", "fr"],
     defaultLocale: "en",
   });

   export type Locale = (typeof routing.locales)[number];

   export const { Link, redirect, usePathname, useRouter, getPathname } =
     createNavigation(routing);
   ```

2. **Middleware**:
   The middleware for handling i18n routing is set up in [`src/middleware.ts`](src/middleware.ts). This middleware ensures that the correct locale is used based on the request.

   ```ts
   import createMiddleware from "next-intl/middleware";

   import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

   import { routing } from "./i18n/routing";

   const handleI18nRouting = createMiddleware(routing);
   const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

   export default clerkMiddleware(async (auth, req) => {
     if (isProtectedRoute(req)) await auth.protect();
     return handleI18nRouting(req);
   });

   export const config = {
     matcher: [
       "/",
       "/(en|fr)/:path*",
       "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
       "/(api|trpc)(.*)",
     ],
   };
   ```

3. **Messages**:
   Translation messages are stored in the `messages` directory. Each locale has its own folder containing JSON files for different namespaces. For example:

   - `messages/en/home.json`
   - `messages/fr/home.json`

4. **Request Configuration**:
   The request configuration for i18n is defined in [`src/i18n/request.ts`](src/i18n/request.ts). This file ensures that the correct messages are loaded based on the request locale.

   ```ts
   import { getRequestConfig } from "next-intl/server";

   import { Locale, routing } from "./routing";

   export default getRequestConfig(async ({ requestLocale }) => {
     let locale = await requestLocale;
     if (!locale || !routing.locales.includes(locale as Locale)) {
       locale = routing.defaultLocale;
     }

     return {
       locale,
       messages: {
         ...(await import(`../../messages/${locale}/home.json`)).default,
         ...(await import(`../../messages/${locale}/auth.json`)).default,
         ...(await import(`../../messages/${locale}/notFound.json`)).default,
       },
     };
   });
   ```

#### Usage

1. **Adding Translations**:
   To add translations, create or update the JSON files in the `messages` directory. For example, to add a new translation for the home page in French, update `messages/fr/home.json`:

   ```json
   {
     "Home": {
       "Docs": {
         "title": "Documents",
         "text": "Trouvez des informations détaillées sur les fonctionnalités et l'API de Next.js."
       },
       "Learn": {
         "title": "Apprendre",
         "text": "Apprenez à connaître Next.js dans un cours interactif avec des quiz !"
       }
     }
   }
   ```

2. **Using Translations in Components**:
   Use the `useTranslations` hook from `next-intl` to access translations in your components. For example, in a component:

   ```tsx
   import { useTranslations } from "next-intl";

   export default function Home() {
     const t = useTranslations("Home");

     return (
       <main>
         <h1>{t("Docs.title")}</h1>
         <p>{t("Docs.text")}</p>
       </main>
     );
   }
   ```

3. **Linking to Different Locales**:
   Use the `Link` component from `next-intl/navigation` to create links that respect the current locale. For example:

   ```tsx
   import { Link } from "@/i18n/routing";

   export default function Navigation() {
     return (
       <nav>
         <Link href="/">{t("Home")}</Link>
         <Link href="/about">{t("About")}</Link>
       </nav>
     );
   }
   ```

By following these steps, you can set up and use i18n in your Next.js project to support multiple languages.

---

### Prisma

```sh
# Set up a new Prisma project
$ prisma init
# Generate artifacts (e.g. Prisma Client)
$ prisma generate
# Browse your data
$ prisma studio
# Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ prisma migrate dev
# Pull the schema from an existing database, updating the Prisma schema
$ prisma db pull
# Push the Prisma schema state to the database
$ prisma db push
# Validate your Prisma schema
$ prisma validate
# Format your Prisma schema
$ prisma format
# Display Prisma version info
$ prisma version
# Display Prisma debug info
$ prisma debug
```

#### Getting started with Prisma Migrate

##### Customizing migrations

In some scenarios, you need to edit a migration file before you apply it. For example, to change the direction of a 1-1 relation (moving the foreign key from one side to another) without data loss, you need to move data as part of the migration - this SQL is not part of the default migration, and must be written by hand.

This guide explains how to edit migration files and gives some examples of use cases where you may want to do this.

###### How to edit a migration file

To edit a migration file before applying it, the general procedure is the following:

1. Make a schema change that requires custom SQL (for example, to preserve existing data)

2. Create a draft migration using:

   `npx prisma migrate dev --create-only`

3. Modify the generated SQL file.

4. Apply the modified SQL by running:

   `npx prisma migrate dev`

###### [Example: Rename a field](https://www.prisma.io/docs/orm/prisma-migrate/workflows/customizing-migrations#example-rename-a-field)

###### [Example: Change the direction of a 1-1 relation](https://www.prisma.io/docs/orm/prisma-migrate/workflows/customizing-migrations#example-change-the-direction-of-a-1-1-relation)

---

### Storybook

WIP

---

### Test

Generate a basic Jest configuration file by running the following command `npm init jest@latest`

This will take you through a series of prompts to setup Jest for your project, including automatically creating a `jest.config.ts`.

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__`folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test only needs to `import App from './App'` instead of a long relative path. Collocation also helps find tests more quickly in larger projects.

To run test `yarn test`

## VSCode Extensions 💻

### [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

The Better Comments extension will help you create more human-friendly comments in your code.
With this extension, you will be able to categorize your annotations into:

- Alerts
- Queries
- TODOs
- Highlights
- Commented out code can also be styled to make it clear the code shouldn't be there
- Any other comment styles you'd like can be specified in the settings

### [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Integrates ESLint into VS Code. If you are new to ESLint check the documentation.

The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running npm install eslint in the workspace folder for a local install or `npm install -g eslint` for a global install.

On new folders you might also need to create an .eslintrc configuration file. You can do this by either using the VS Code command Create ESLint configuration or by running the eslint command in a terminal with `npx eslint --init`.

### [i18n Ally](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

General Features

- Supports multi-root workspaces
- Supports remote development
- Supports numerous popular frameworks
- Supports linked locale messages
- Uses i18n for the extension itself, of course. Translation List

### [SonarLint](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

SonarLint by Sonar is a free IDE extension that empowers you to fix coding issues before they exist. More than a linter, SonarLint detects and highlights issues that can lead to bugs, vulnerabilities, and code smells as you create your code. It offers clear remediation guidance and educational help, so you can fix issues before the code is committed. SonarLint in VS Code supports analysis of JS/TS, Python, PHP, Java, C, C++, C#, Go, and IaC code locally in your IDE.

### [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

ErrorLens turbo-charges language diagnostic features by making diagnostics stand out more prominently, highlighting the entire line wherever a diagnostic is generated by the language and also prints the message inline.

## Deployment 🚀

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More 🧠

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Suggestions ☝️

### Auth

- [Clerk](https://clerk.com/docs)
- [Kinde](https://kinde.com/)

### Components

- [shadcn](https://ui.shadcn.com/)
- [MUI](https://mui.com/core/)
- [Next UI](https://nextui.org/)
- [Ant Design](https://ant.design/)
- [Aceternity UI](https://ui.aceternity.com/)
- [Preline UI](https://preline.co/index.html)
- [Origin UI](https://originui.com/)
- [Tailus](https://ui.tailus.io/)

### Database

- [Neon Tech](https://console.neon.tech/)
- [Supabase](https://supabase.com/)
- [Turso](https://turso.tech/)
- [Planetscale](https://planetscale.com/)

### State Management

- [Redux + Next](https://redux-toolkit.js.org/usage/nextjs)
- [Recoil](https://recoiljs.org/)
- [Zustand](https://github.com/pmndrs/zustand)

### Validation

- [Joi](https://joi.dev/)
- [Yup](https://github.com/jquense/yup)
- [Zod](https://zod.dev/)
