import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll } from "../src/testable2.mjs";

describe("Testable 2: a dice game", () => {
  test("one pair", () => {
    expect(diceHandValue(2, 2)).to.equal(102);
    expect(diceHandValue(6, 6)).to.equal(106);
  });

  test("high die", () => {
    expect(diceHandValue(2, 1)).to.equal(2);
    expect(diceHandValue(1, 3)).to.equal(3);
    expect(diceHandValue(5, 6)).to.equal(6);
  });
});
