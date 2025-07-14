import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { expect, it, describe, beforeEach } from "vitest";
import { SearchGymsUseCase } from "./search-gyms";

let gymsRepository: InMemoryGymsRepository;
let sut: SearchGymsUseCase;

describe("Fetch User Check-ins Use Case", async () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new SearchGymsUseCase(gymsRepository);
  });

  it("should be able to search for gyms", async () => {
    await gymsRepository.create({
      title: "Unifit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      phone: "(33) 9999-8888",
      latitude: -23.55052,
      longitude: -46.633308,
    });

    await gymsRepository.create({
      title: "Fisioforma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      phone: "(33) 99988-8877",
      latitude: -23.55052,
      longitude: -46.633308,
    });

    const { gyms } = await sut.execute({
      query: "Unifit",
      page: 1,
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([expect.objectContaining({ title: "Unifit" })]);
  });

  it("should be able to fetch paginated gyms search", async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Unifit ${i}`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        phone: "(33) 9999-8888",
        latitude: -23.55052,
        longitude: -46.633308,
      });
    }

    const { gyms } = await sut.execute({
      query: "Unifit",
      page: 2,
    });

    expect(gyms).toHaveLength(2);
    expect(gyms).toEqual([
      expect.objectContaining({ title: "Unifit 21" }),
      expect.objectContaining({ title: "Unifit 22" }),
    ]);
  });
});
