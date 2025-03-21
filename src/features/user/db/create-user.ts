"use server";

import { User } from "@prisma/client";
import { z } from "zod";

import prisma from "@/lib/prisma";

import { createUserInputSchema } from "../schema/create-user-schema";

export type CreateUserInput = z.infer<typeof createUserInputSchema>;

export const createUser = async ({
  data,
}: {
  data: CreateUserInput;
}): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};
