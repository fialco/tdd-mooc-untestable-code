import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv } from "../src/testable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Testable 3: CSV file parsing", () => {
  test("todo", async () => {
    // TODO: write proper tests
    try {
      expect(await parsePeopleCsv("people.csv")).to.deep.equal([]);
    } catch (e) {}
  });

  // TODO: test parse firstName
  // TODO: test parse lastName
  // TODO: test parse gender
  // TODO: test parse gender first letter lowercase
  // TODO: test parse age
  // TODO: test age not given
  // TODO: test skip empty lines
  // TODO: test trim
});
