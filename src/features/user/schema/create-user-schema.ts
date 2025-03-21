import { z } from "zod";

export const createUserInputSchema = z.object({
  clerkUserId: z.string().nonempty(),
  createdAt: z.date(),
  email: z.string().nonempty(),
  firstName: z.string().nullable(),
  hasVerifiedEmailAddress: z.boolean(),
  imageUrl: z.string().nullable(),
  lastName: z.string().nullable(),
  lastSignInAt: z.date(),
  updatedAt: z.date(),
  username: z.string().nullable(),
});
