import { UsersRepository } from "@/repositories/users-repository";
import { User, Prisma, Role } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class InMemoryUsersRepository implements UsersRepository {
  async findById(id: string) {
    const user = this.items.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  public items: User[] = [];

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      role: Role.MEMBER,
    };

    this.items.push(user);

    return user;
  }
}
