import formatTime from "./formatTime";

describe("formatTime", () => {
  it("should return correct time string", () => {
    expect(formatTime(100)).toBe("01:40");
    expect(formatTime(200)).toBe("03:20");
    expect(formatTime(0)).toBe("00:00");
  });
});
