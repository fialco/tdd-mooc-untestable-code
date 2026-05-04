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

  test("rolls are always between 1 and 6", () => {
    const rolls = new Array();
    for (let i = 0; i < 100; i++) {
      rolls.push(diceRoll());
    }

    let rollCounts = rolls.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    expect(rollCounts).to.be.and.an("object").that.has.all.keys("1", "2", "3", "4", "5", "6");
  });
});
