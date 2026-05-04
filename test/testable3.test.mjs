import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv } from "../src/testable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Testable 3: CSV file parsing", () => {
  test("parse first name", () => {
    const person = parsePeopleCsv("Yor,Forger,27,Female")[0];
    expect(person.firstName).to.equal("Yor");
  });

  // TODO: test parse lastName
  // TODO: test parse gender
  // TODO: test parse gender first letter lowercase
  // TODO: test parse age
  // TODO: test age not given
  // TODO: test skip empty lines
  // TODO: test trim
});
