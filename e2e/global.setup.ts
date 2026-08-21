import { clerkSetup } from "@clerk/testing/playwright";

export default async function globalSetup() {
  if (!process.env.E2E_CLERK_USER_EMAIL) {
    throw new Error("E2E_CLERK_USER_EMAIL is required for Clerk E2E tests");
  }

  await clerkSetup();
}
