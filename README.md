# Next.js Boilerplate

An opinionated full-stack starter for applications built with Next.js 16,
React 19, TypeScript, Clerk, Prisma, PostgreSQL, Tailwind CSS 4, and shadcn/ui.

The repository includes authentication, localized routes, dark mode, a
server-only data layer, Clerk-to-Prisma user synchronization, unit tests, E2E
tests, linting, formatting, and GitHub Actions workflows.

## Requirements

- [Node.js 24.19](https://nodejs.org/) (the supported Node 24 LTS line)
- [Bun 1.4](https://bun.sh/)
- PostgreSQL
- A Clerk development instance

The required versions are pinned in `.node-version` and `package.json`.

## Included stack

- Next.js App Router with React Server Components
- TypeScript with strict type checking
- Clerk authentication and verified webhooks
- Prisma ORM 7 with the PostgreSQL driver adapter
- `next-intl` routes and messages for English and French
- Tailwind CSS 4 with the shadcn/ui `new-york` style and zinc theme
- React Hook Form and Zod
- TanStack Query, demonstrated by the authenticated `/api/me` request
- Vitest, Testing Library, and Playwright with Clerk test helpers
- ESLint 10, Prettier, Husky, lint-staged, and Commitlint
- GitHub Actions for CI and protected production database migrations

## Setup

Install dependencies from the committed Bun lockfile:

```bash
bun install --frozen-lockfile
```

Copy the environment template and replace every placeholder:

```bash
cp .env.example .env
```

Generate Prisma Client, apply a development migration, and start Next.js:

```bash
bun run prisma:generate
bun run prisma:migrate:dev
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). The proxy redirects the
root URL to a supported locale.

## Environment variables

| Variable                            | Purpose                                           |
| ----------------------------------- | ------------------------------------------------- |
| `DATABASE_URL`                      | Pooled PostgreSQL URL used by the application     |
| `DIRECT_URL`                        | Direct PostgreSQL URL used by Prisma migrations   |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk browser key                                 |
| `CLERK_SECRET_KEY`                  | Clerk server key                                  |
| `CLERK_WEBHOOK_SIGNING_SECRET`      | Signing secret for the Clerk webhook              |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | Localized sign-in route configured for Clerk      |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`     | Localized sign-up route configured for Clerk      |
| `E2E_CLERK_USER_EMAIL`              | Development-instance user used by Clerk E2E tests |

Never commit real keys. Playwright and CI must use Clerk development keys and a
dedicated test user.

## Clerk user synchronization

Clerk is the source of truth for user lifecycle events. Configure a Clerk
webhook endpoint for:

```text
https://your-domain.example/api/webhooks/clerk
```

Subscribe to `user.created`, `user.updated`, and `user.deleted`. The handler
uses Clerk's `verifyWebhook()` helper, upserts creation and update events, and
uses idempotent deletion. Webhooks are eventually consistent: immediately
after sign-up, `/api/me` can temporarily return `404` until the webhook arrives.

For local webhook delivery, follow the
[Clerk webhook documentation](https://clerk.com/docs/guides/development/webhooks/overview)
and forward events to `http://localhost:3000/api/webhooks/clerk`.

## Commands

| Command                         | Description                                            |
| ------------------------------- | ------------------------------------------------------ |
| `bun run dev`                   | Start the development server                           |
| `bun run build`                 | Create a production build                              |
| `bun run start`                 | Serve a production build                               |
| `bun run lint`                  | Run ESLint                                             |
| `bun run lint:fix`              | Apply safe ESLint fixes                                |
| `bun run format`                | Check formatting                                       |
| `bun run format:fix`            | Format the repository                                  |
| `bun run typecheck`             | Run TypeScript without emitting files                  |
| `bun run test`                  | Run the Vitest suite once                              |
| `bun run test:watch`            | Run Vitest in watch mode                               |
| `bun run test:e2e`              | Run the Clerk Playwright suite                         |
| `bun run prisma:studio`         | Open Prisma Studio                                     |
| `bun run prisma:generate`       | Regenerate the ignored Prisma client                   |
| `bun run prisma:validate`       | Validate the Prisma schema and configuration           |
| `bun run prisma:format`         | Format the Prisma schema                               |
| `bun run prisma:migrate:dev`    | Create and apply a development migration               |
| `bun run prisma:migrate:deploy` | Apply committed migrations in a controlled environment |

## Testing and CI

Vitest covers the public user-sync, repository, webhook, and `/api/me` seams.
Playwright verifies signed-out protection, sign-in, dashboard access, and
sign-out with Clerk's official testing helpers.

The CI workflow requires the environment variables listed above as GitHub
Actions secrets. It installs with the frozen Bun lockfile, then runs linting,
type checking, unit tests, Prisma validation, the production build, and E2E
tests.

## Database migrations and deployment

The Vercel build generates Prisma Client and builds Next.js. It deliberately
does not mutate the database.

Production migrations run only through the manually dispatched
`Migrate production database` workflow. Protect its `production` GitHub
environment with required reviewers and provide `DIRECT_URL` as an environment
secret.

## Project structure

```text
src/
├── app/
│   ├── [locale]/          localized pages and auth screens
│   └── api/               non-localized HTTP route handlers
├── components/            shared and shadcn/ui components
├── db/                    server-only data access
├── features/              feature APIs, hooks, components, and tests
├── generated/prisma/      generated and intentionally ignored
├── i18n/                  next-intl routing and request configuration
├── lib/                   Prisma and shared utilities
└── proxy.ts               Clerk protection and locale routing
```

Tailwind 4 is configured in `src/app/globals.css`; there is no JavaScript
Tailwind configuration file. shadcn/ui is configured through `components.json`.

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/).
Husky runs lint-staged before commits and Commitlint validates commit messages.
Do not bypass these hooks.

Examples:

```text
feat(auth): add organization switching
fix(webhook): make user deletion idempotent
docs(readme): clarify migration workflow
```

## Optional additions

These tools are not installed. Add them only when the product needs them:

- [Storybook](https://storybook.js.org/) and [MSW](https://mswjs.io/) for
  isolated UI development and API simulation
- [Sentry](https://sentry.io/) and
  [OpenTelemetry](https://opentelemetry.io/) for observability
- [React Email](https://react.email/) with [Resend](https://resend.com/) for
  transactional email
- [Trigger.dev](https://trigger.dev/) for durable background work
- [PostHog](https://posthog.com/) for product analytics and feature flags
- [`@t3-oss/env-nextjs`](https://env.t3.gg/) for runtime environment validation

Each suggestion is complementary to the delivered stack; none is required to
run this boilerplate.

## Browser support

Tailwind CSS 4 requires Safari 16.4+, Chrome 111+, or Firefox 128+. Supporting
older browsers requires remaining on Tailwind CSS 3.4.
