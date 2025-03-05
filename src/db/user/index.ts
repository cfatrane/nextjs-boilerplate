"use server";

import { User } from "@prisma/client";

import prisma from "@/lib/prisma";

// Create
type CreateUserProps = Pick<
  User,
  | "clerkUserId"
  | "createdAt"
  | "email"
  | "firstName"
  | "hasVerifiedEmailAddress"
  | "imageUrl"
  | "lastName"
  | "lastSignInAt"
  | "updatedAt"
  | "username"
>;

export const createUser = async ({
  clerkUserId,
  createdAt,
  email,
  firstName,
  hasVerifiedEmailAddress,
  imageUrl,
  lastName,
  lastSignInAt,
  username,
  updatedAt,
}: CreateUserProps) => {
  const user = await prisma.user.create({
    data: {
      clerkUserId,
      createdAt,
      email,
      firstName,
      hasVerifiedEmailAddress,
      imageUrl,
      lastName,
      lastSignInAt,
      updatedAt,
      username,
    },
  });

  return user;
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

// Update
export const updateUser = async ({
  clerkUserId,
  data,
}: {
  clerkUserId: string;
  data: object;
}) => {
  const updatedUser = await prisma.user.update({
    where: { clerkUserId },
    data,
  });

  return updatedUser;
};

// Delete
export const deleteUser = async (clerkUserId: string) => {
  const deletedUser = await prisma.user.delete({
    where: { clerkUserId },
  });

  return deletedUser;
};
