import { prisma } from "@/lib/prisma";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-user-repository";
import { hash } from "bcryptjs";

interface RegisterUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerUserUseCase({
  name,
  email,
  password,
}: RegisterUserUseCaseRequest) {
  const password_hash = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("User already exists with this email.");
  }

  const prismaUsersRepository = new PrismaUsersRepository();

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  });
}
