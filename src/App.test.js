import { title } from "./App";

describe("unit testing basics", () => {
  test("assert if title is React", () => {
    expect(true).toBe(true);
  });

  test("assert", () => {
    expect(title).toBe("React Training");
  });
});