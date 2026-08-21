import type { User } from "@/generated/prisma/client";
import { describe, expect, it } from "vitest";

import { makeUserRepository, type UserPersistence } from "./user-repository";

function createMemoryPersistence(): UserPersistence {
  const users = new Map<string, User>();

  return {
    async deleteMany({ where }) {
      const deleted = users.delete(where.clerkUserId);

      return { count: deleted ? 1 : 0 };
    },
    async findUnique({ where }) {
      return users.get(where.clerkUserId) ?? null;
    },
    async upsert({ create, update, where }) {
      const current = users.get(where.clerkUserId);
      const now = new Date("2026-08-21T00:00:00.000Z");
      const user: User = current
        ? { ...current, ...update, updatedAt: now }
        : {
            ...create,
            id: "database-user-id",
            role: "USER",
            updatedAt: now,
          };

      users.set(where.clerkUserId, user);

      return user;
    },
  };
}

const initialUser = {
  clerkUserId: "user_123",
  createdAt: new Date("2026-08-20T00:00:00.000Z"),
  email: "before@example.com",
  firstName: "Ada",
  hasVerifiedEmailAddress: true,
  imageUrl: null,
  lastActiveAt: new Date("2026-08-21T00:00:00.000Z"),
  lastName: "Lovelace",
  lastSignInAt: new Date("2026-08-21T00:00:00.000Z"),
  username: "ada",
};

describe("user repository", () => {
  it("upserts repeated Clerk events without creating duplicate users", async () => {
    const repository = makeUserRepository(createMemoryPersistence());

    await repository.syncUser(initialUser);
    await repository.syncUser({
      ...initialUser,
      email: "after@example.com",
    });

    await expect(
      repository.getUserByClerkId("user_123"),
    ).resolves.toMatchObject({
      clerkUserId: "user_123",
      email: "after@example.com",
    });
  });

  it("treats repeated deletion events as successful", async () => {
    const repository = makeUserRepository(createMemoryPersistence());

    await repository.syncUser(initialUser);
    await repository.deleteUserByClerkId("user_123");
    await repository.deleteUserByClerkId("user_123");

    await expect(repository.getUserByClerkId("user_123")).resolves.toBeNull();
  });
});
