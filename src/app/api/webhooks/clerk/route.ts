import type { NextRequest } from "next/server";

import { verifyWebhook } from "@clerk/nextjs/webhooks";

import { deleteUserByClerkId, syncUser } from "@/db/user";

import { createClerkWebhookHandler } from "./handler";

export const POST = createClerkWebhookHandler({
  deleteUserByClerkId,
  syncUser,
  verify: (request) => verifyWebhook(request as NextRequest),
});
