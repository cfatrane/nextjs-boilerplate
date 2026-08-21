import type { User } from "@/generated/prisma/client";
import { describe, expect, it } from "vitest";

import { createGetCurrentUserHandler } from "./handler";

const databaseUser: User = {
  clerkUserId: "user_123",
  createdAt: new Date("2026-08-20T00:00:00.000Z"),
  email: "ada@example.com",
  firstName: "Ada",
  hasVerifiedEmailAddress: true,
  id: "database-user-id",
  imageUrl: "https://example.com/ada.png",
  lastActiveAt: new Date("2026-08-21T00:00:00.000Z"),
  lastName: "Lovelace",
  lastSignInAt: new Date("2026-08-21T00:00:00.000Z"),
  role: "USER",
  updatedAt: new Date("2026-08-21T00:00:00.000Z"),
  username: "ada",
};

describe("GET /api/me", () => {
  it("returns 401 when there is no Clerk session", async () => {
    const handler = createGetCurrentUserHandler({
      authenticate: async () => null,
      getUserByClerkId: async () => databaseUser,
    });

    const response = await handler();

    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ error: "Unauthorized" });
  });

  it("returns 404 while the asynchronous webhook has not synced the user", async () => {
    const handler = createGetCurrentUserHandler({
      authenticate: async () => "user_123",
      getUserByClerkId: async () => null,
    });

    const response = await handler();

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({ error: "User not found" });
  });

  it("returns only the current-user DTO", async () => {
    const handler = createGetCurrentUserHandler({
      authenticate: async () => "user_123",
      getUserByClerkId: async () => databaseUser,
    });

    const response = await handler();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      user: {
        email: "ada@example.com",
        firstName: "Ada",
        id: "database-user-id",
        imageUrl: "https://example.com/ada.png",
        lastName: "Lovelace",
        role: "USER",
        username: "ada",
      },
    });
  });
});
