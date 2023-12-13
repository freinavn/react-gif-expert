import { getGifs } from "../../src/helpers/getGifs";

/* eslint-disable no-undef */
describe("Pruebas en GetGifs", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One punch");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});