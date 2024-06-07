"use server";

import prisma from "@/lib/prisma";

var bcrypt = require("bcryptjs");

export const getAllUsers = async () => {
  const users = await prisma.character.findMany();

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

export const createUser = async (email: string, password: string) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
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
