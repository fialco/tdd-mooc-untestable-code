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

  test("parse last name", () => {
    const person = parsePeopleCsv("Anya,Forger,6,Female")[0];
    expect(person.lastName).to.equal("Forger");
  });

  test("parse gender", () => {
    const person = parsePeopleCsv("Anya,Forger,6,female")[0];
    expect(person.gender).to.equal("f");
  });

  test("parse gender always returns lowercase", () => {
    const person = parsePeopleCsv("Anya,Forger,6,Female")[0];
    expect(person.gender).to.equal("f");
  });

  // TODO: test parse age
  // TODO: test age not given
  // TODO: test skip empty lines
  // TODO: test trim
});
