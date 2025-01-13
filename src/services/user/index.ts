"use server";

import prisma from "@/lib/prisma";

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

export const updateUser = async ({
  where,
  data,
}: {
  where: any;
  data: object;
}) => {
  const updateUser = await prisma.user.update({
    where: where,
    data,
  });

  return updateUser;
};
