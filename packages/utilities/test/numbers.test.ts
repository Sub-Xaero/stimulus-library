import { expect } from "chai";

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

describe("clamp", function () {
  it("should return the lower bound when the number is too small", function () {
    expect(clamp(-1, 0, 10)).to.equal(0);
  });

  it("should return the upper bound when the number is too large", function () {
    expect(clamp(11, 0, 10)).to.equal(10);
  });

  it("should return the number it was given when it is within the bounds", function () {
    expect(clamp(5, 0, 10)).to.equal(5);
  });
});