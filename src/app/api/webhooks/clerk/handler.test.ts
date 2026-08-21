import { describe, expect, it } from "vitest";

import { createClerkWebhookHandler } from "./handler";

const clerkUser = {
  created_at: 1_700_000_000_000,
  email_addresses: [
    {
      email_address: "ada@example.com",
      id: "email_primary",
      verification: { status: "verified" },
    },
  ],
  first_name: "Ada",
  id: "user_123",
  image_url: "",
  last_active_at: null,
  last_name: "Lovelace",
  last_sign_in_at: null,
  primary_email_address_id: "email_primary",
  updated_at: 1_700_000_100_000,
  username: "ada",
};

describe("Clerk webhook HTTP handler", () => {
  it("rejects a request whose Clerk signature cannot be verified", async () => {
    const handler = createClerkWebhookHandler({
      deleteUserByClerkId: async () => undefined,
      syncUser: async () => undefined,
      verify: async () => {
        throw new Error("invalid signature");
      },
    });

    const response = await handler(
      new Request("http://localhost/api/webhooks/clerk"),
    );

    expect(response.status).toBe(400);
    await expect(response.text()).resolves.toBe("Invalid webhook signature");
  });

  it("acknowledges an idempotent user sync", async () => {
    const syncedUsers: Array<{ clerkUserId: string; email: string }> = [];
    const handler = createClerkWebhookHandler({
      deleteUserByClerkId: async () => undefined,
      syncUser: async (user) => {
        syncedUsers.push(user);
      },
      verify: async () => ({ data: clerkUser, type: "user.updated" }),
    });

    const response = await handler(
      new Request("http://localhost/api/webhooks/clerk"),
    );

    expect(response.status).toBe(200);
    expect(syncedUsers).toHaveLength(1);
    expect(syncedUsers[0]).toMatchObject({
      clerkUserId: "user_123",
      email: "ada@example.com",
    });
  });

  it("acknowledges repeated deletion events", async () => {
    const deletedIds: string[] = [];
    const handler = createClerkWebhookHandler({
      deleteUserByClerkId: async (id) => {
        deletedIds.push(id);
      },
      syncUser: async () => undefined,
      verify: async () => ({ data: { id: "user_123" }, type: "user.deleted" }),
    });

    const firstResponse = await handler(
      new Request("http://localhost/api/webhooks/clerk"),
    );
    const secondResponse = await handler(
      new Request("http://localhost/api/webhooks/clerk"),
    );

    expect(firstResponse.status).toBe(200);
    expect(secondResponse.status).toBe(200);
    expect(deletedIds).toEqual(["user_123", "user_123"]);
  });
});
