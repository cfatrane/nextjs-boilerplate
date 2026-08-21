import { describe, expect, it } from "vitest";

import { toUserSyncData } from "./user-sync";

describe("toUserSyncData", () => {
  it("maps the primary Clerk email and profile to Prisma data", () => {
    const result = toUserSyncData({
      created_at: 1_700_000_000_000,
      email_addresses: [
        {
          email_address: "secondary@example.com",
          id: "email_secondary",
          verification: { status: "unverified" },
        },
        {
          email_address: "primary@example.com",
          id: "email_primary",
          verification: { status: "verified" },
        },
      ],
      first_name: "Ada",
      id: "user_123",
      image_url: "https://example.com/ada.png",
      last_active_at: 1_700_000_300_000,
      last_name: "Lovelace",
      last_sign_in_at: 1_700_000_200_000,
      primary_email_address_id: "email_primary",
      updated_at: 1_700_000_400_000,
      username: "ada",
    });

    expect(result).toEqual({
      clerkUserId: "user_123",
      createdAt: new Date(1_700_000_000_000),
      email: "primary@example.com",
      firstName: "Ada",
      hasVerifiedEmailAddress: true,
      imageUrl: "https://example.com/ada.png",
      lastActiveAt: new Date(1_700_000_300_000),
      lastName: "Lovelace",
      lastSignInAt: new Date(1_700_000_200_000),
      username: "ada",
    });
  });

  it("rejects a Clerk user without an email address", () => {
    expect(() =>
      toUserSyncData({
        created_at: 1_700_000_000_000,
        email_addresses: [],
        first_name: null,
        id: "user_without_email",
        image_url: "",
        last_active_at: null,
        last_name: null,
        last_sign_in_at: null,
        primary_email_address_id: null,
        updated_at: 1_700_000_100_000,
        username: null,
      }),
    ).toThrow("has no email address");
  });
});
