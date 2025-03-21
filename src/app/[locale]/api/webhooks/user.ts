import { DeletedObjectJSON, UserJSON } from "@clerk/nextjs/server";
import dayjs from "dayjs";

import { deleteUser, updateUser } from "@/db/user";

import { createUser } from "@/features/user/db/create-user";

export const syncCreatedUser = async (user: UserJSON) => {
  if (user) {
    const clerkUserId = user.id;

    await createUser({
      data: {
        clerkUserId,
        createdAt: dayjs(user.created_at).toDate() ?? "",
        email: user.email_addresses[0]?.email_address ?? "",
        firstName: user.first_name ?? "",
        hasVerifiedEmailAddress:
          user.email_addresses[0]?.verification?.status === "verified",
        imageUrl: user.image_url ?? "",
        lastName: user?.last_name ?? "",
        lastSignInAt: user.last_sign_in_at
          ? dayjs(user.last_sign_in_at).toDate()
          : dayjs().toDate(),
        updatedAt: dayjs(user.updated_at).toDate() ?? "",
        username: user?.username ?? "",
      },
    });
  }
};

export const syncUpdatedUser = async (user: UserJSON) => {
  if (user) {
    const clerkUserId = user.id;

    await updateUser({
      clerkUserId,
      data: {
        createdAt: dayjs(user.created_at).toDate() ?? "",
        email: user.email_addresses[0]?.email_address ?? "",
        firstName: user.first_name ?? "",
        hasVerifiedEmailAddress:
          user.email_addresses[0]?.verification?.status === "verified",
        imageUrl: user.image_url ?? "",
        lastName: user?.last_name ?? "",
        lastSignInAt: dayjs(user.last_sign_in_at).toDate() ?? "",
        updatedAt: dayjs(user.updated_at).toDate() ?? "",
        username: user?.username ?? "",
      },
    });
  }
};

export const syncDeletedUser = async (user: DeletedObjectJSON) => {
  if (user) {
    const clerkUserId = user.id;

    await deleteUser(clerkUserId!);
  }
};
