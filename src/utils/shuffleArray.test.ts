import shuffleArray from "./shuffleArray";

describe("shuffleArray", () => {
  it("should shuffle the array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(shuffleArray(array)).toHaveLength(array.length);
    expect(shuffleArray(array).sort()).toEqual(array.sort());
  });
});
