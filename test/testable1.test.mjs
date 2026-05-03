import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/testable1.mjs";

describe("Testable 1: days until Christmas", () => {
  test("1st of December, 24 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-01"))).to.equal(24);
  });

  test("25th of December, 0 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-25"))).to.equal(0);
    expect(daysUntilChristmas(new Date("2026-12-25T00:00:00"))).to.equal(0);
    expect(daysUntilChristmas(new Date("2026-12-25T23:59:59"))).to.equal(0);
  });

  test("Boxing day, 364 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-26"))).to.equal(364);
    expect(daysUntilChristmas(new Date("2026-12-26T00:00:00"))).to.equal(364);
  });

  test("Christmas eve, 1 day until Christmas", () => {
    expect(daysUntilChristmas(new Date("2026-12-24"))).to.equal(1);
    expect(daysUntilChristmas(new Date("2026-12-24T00:00:00"))).to.equal(1);
    expect(daysUntilChristmas(new Date("2026-12-24T23:59:59"))).to.equal(1);
  });
});
