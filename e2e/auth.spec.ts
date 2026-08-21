import { clerk, setupClerkTestingToken } from "@clerk/testing/playwright";
import { expect, test } from "@playwright/test";

const clerkUserEmail = process.env.E2E_CLERK_USER_EMAIL;

test.beforeEach(async ({ context }) => {
  await setupClerkTestingToken({ context });
});

test("redirects signed-out visitors away from the dashboard", async ({
  page,
}) => {
  await page.goto("/en/dashboard");

  await expect(page).toHaveURL(/\/en\/sign-in/);
});

test("allows sign-in, authenticated dashboard access, and sign-out", async ({
  page,
}) => {
  test.skip(!clerkUserEmail, "E2E_CLERK_USER_EMAIL is required");

  await page.goto("/en");
  await clerk.signIn({ emailAddress: clerkUserEmail!, page });
  await page.goto("/en/dashboard");

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await clerk.signOut({ page });
  await page.goto("/en/dashboard");

  await expect(page).toHaveURL(/\/en\/sign-in/);
});
