import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/testable1.mjs";

describe("Testable 1: days until Christmas", () => {
  test("1st of December, 24 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-01"))).to.equal(24);
  });

  test("25th of December, 0 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-25"))).to.equal(0);
  });

  test("Boxing day, 364 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-26"))).to.equal(364);
  });
});
