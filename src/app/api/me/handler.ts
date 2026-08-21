import type { User } from "@/generated/prisma/client";

export type CurrentUser = Pick<
  User,
  "email" | "firstName" | "id" | "imageUrl" | "lastName" | "role" | "username"
>;

type CurrentUserDependencies = {
  authenticate: () => Promise<string | null>;
  getUserByClerkId: (clerkUserId: string) => Promise<User | null>;
};

export function createGetCurrentUserHandler({
  authenticate,
  getUserByClerkId,
}: CurrentUserDependencies) {
  return async function getCurrentUser() {
    const clerkUserId = await authenticate();

    if (!clerkUserId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await getUserByClerkId(clerkUserId);

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const currentUser: CurrentUser = {
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      imageUrl: user.imageUrl,
      lastName: user.lastName,
      role: user.role,
      username: user.username,
    };

    return Response.json({ user: currentUser });
  };
}
