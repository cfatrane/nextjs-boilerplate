import type { User } from "@/generated/prisma/client";

import type { UserSyncData } from "@/features/user/user-sync";

type ClerkUserKey = { clerkUserId: string };

export type UserPersistence = {
  deleteMany: (args: { where: ClerkUserKey }) => Promise<{ count: number }>;
  findUnique: (args: { where: ClerkUserKey }) => Promise<User | null>;
  upsert: (args: {
    create: UserSyncData;
    update: Omit<UserSyncData, "createdAt">;
    where: ClerkUserKey;
  }) => Promise<User>;
};

export function makeUserRepository(persistence: UserPersistence) {
  return {
    async deleteUserByClerkId(clerkUserId: string) {
      await persistence.deleteMany({ where: { clerkUserId } });
    },
    getUserByClerkId(clerkUserId: string) {
      return persistence.findUnique({ where: { clerkUserId } });
    },
    async syncUser(data: UserSyncData) {
      const update: Omit<UserSyncData, "createdAt"> = {
        clerkUserId: data.clerkUserId,
        email: data.email,
        firstName: data.firstName,
        hasVerifiedEmailAddress: data.hasVerifiedEmailAddress,
        imageUrl: data.imageUrl,
        lastActiveAt: data.lastActiveAt,
        lastName: data.lastName,
        lastSignInAt: data.lastSignInAt,
        username: data.username,
      };

      await persistence.upsert({
        create: data,
        update,
        where: { clerkUserId: data.clerkUserId },
      });
    },
  };
}
