import { auth } from "@clerk/nextjs/server";

import { getUserByClerkId } from "@/db/user";

import { createGetCurrentUserHandler } from "./handler";

export const GET = createGetCurrentUserHandler({
  authenticate: async () => {
    const { userId } = await auth();

    return userId;
  },
  getUserByClerkId,
});
