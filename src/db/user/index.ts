import "server-only";

import prisma from "@/lib/prisma";

import { makeUserRepository } from "./user-repository";

const repository = makeUserRepository({
  deleteMany: (args) => prisma.user.deleteMany(args),
  findUnique: (args) => prisma.user.findUnique(args),
  upsert: (args) => prisma.user.upsert(args),
});

export const { deleteUserByClerkId, getUserByClerkId, syncUser } = repository;
