import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/testable1.mjs";

describe("Testable 1: days until Christmas", () => {
  test("1st of December, 24 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-01"))).to.equal(24);
  });
});
