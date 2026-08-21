export type ClerkUserPayload = {
  created_at: number;
  email_addresses: Array<{
    email_address: string;
    id: string;
    verification: { status: string | null } | null;
  }>;
  first_name: string | null;
  id: string;
  image_url: string;
  last_active_at: number | null;
  last_name: string | null;
  last_sign_in_at: number | null;
  primary_email_address_id: string | null;
  updated_at: number;
  username: string | null;
};

export type UserSyncData = {
  clerkUserId: string;
  createdAt: Date;
  email: string;
  firstName: string | null;
  hasVerifiedEmailAddress: boolean;
  imageUrl: string | null;
  lastActiveAt: Date;
  lastName: string | null;
  lastSignInAt: Date;
  username: string | null;
};

export function toUserSyncData(user: ClerkUserPayload): UserSyncData {
  const primaryEmail =
    user.email_addresses.find(
      ({ id }) => id === user.primary_email_address_id,
    ) ?? user.email_addresses[0];

  if (!primaryEmail) {
    throw new Error(`Clerk user ${user.id} has no email address`);
  }

  return {
    clerkUserId: user.id,
    createdAt: new Date(user.created_at),
    email: primaryEmail.email_address,
    firstName: user.first_name,
    hasVerifiedEmailAddress: primaryEmail.verification?.status === "verified",
    imageUrl: user.image_url || null,
    lastActiveAt: new Date(user.last_active_at ?? user.updated_at),
    lastName: user.last_name,
    lastSignInAt: new Date(user.last_sign_in_at ?? user.created_at),
    username: user.username,
  };
}
