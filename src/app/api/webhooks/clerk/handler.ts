import type { ClerkUserPayload, UserSyncData } from "@/features/user/user-sync";
import { toUserSyncData } from "@/features/user/user-sync";

type VerifiedWebhookEvent = {
  data: unknown;
  type: string;
};

type WebhookDependencies = {
  deleteUserByClerkId: (clerkUserId: string) => Promise<void>;
  syncUser: (user: UserSyncData) => Promise<void>;
  verify: (request: Request) => Promise<VerifiedWebhookEvent>;
};

export function createClerkWebhookHandler({
  deleteUserByClerkId,
  syncUser,
  verify,
}: WebhookDependencies) {
  return async function handleClerkWebhook(request: Request) {
    let event: VerifiedWebhookEvent;

    try {
      event = await verify(request);
    } catch {
      console.error("Clerk webhook verification failed");

      return new Response("Invalid webhook signature", { status: 400 });
    }

    if (event.type === "user.created" || event.type === "user.updated") {
      await syncUser(toUserSyncData(event.data as ClerkUserPayload));
    }

    if (event.type === "user.deleted") {
      const { id } = event.data as { id?: string | null };

      if (id) {
        await deleteUserByClerkId(id);
      }
    }

    return new Response("Webhook received", { status: 200 });
  };
}
