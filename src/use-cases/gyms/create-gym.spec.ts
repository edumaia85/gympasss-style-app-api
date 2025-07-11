import { expect, it, describe, beforeEach } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { CreateGymUseCase } from "./create-gym";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe("Create Gym Use Case", async () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it("should be able to create a gym", async () => {
    const { gym } = await sut.execute({
      title: "Unifit",
      description: "Academia moderna com equipamentos de última geração",
      phone: "11999999999",
      latitude: -23.55052,
      longitude: -46.633308,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
