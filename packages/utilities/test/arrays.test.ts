import { wrapArray } from "../src/arrays";
import { expect } from "chai";

describe("wrapArray", function () {
  it("should wrap primitives in an array", function () {
    expect(wrapArray(1)).to.deep.equal([1]);
  });

  it("should not wrap arrays", function () {
    expect(wrapArray([1])).to.deep.equal([1]);
  });
});
