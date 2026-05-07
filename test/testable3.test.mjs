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
    const person = parsePeopleCsv("Loid,Forger,27,Male")[0];
    expect(person.gender).to.equal("m");
  });

  test("parse age", () => {
    const person = parsePeopleCsv("Yor,Forger,27,Female")[0];
    expect(person.age).to.equal(27);
  });

  test("parse without age return undefined", () => {
    const person = parsePeopleCsv("Loid,Forger,,Male")[0];
    expect(person.age).to.equal(undefined);
  });

  test("skip empty lines", () => {
    const output = parsePeopleCsv(`Loid,Forger,,Male

    Anya,Forger,6,Female

    Yor,Forger,27,Female
    `);

    expect(output).to.deep.equal([
      { firstName: "Loid", lastName: "Forger", gender: "m" },
      { firstName: "Anya", lastName: "Forger", gender: "f", age: 6 },
      { firstName: "Yor", lastName: "Forger", gender: "f", age: 27 },
    ]);
  });

  test("trim input", () => {
    const person = parsePeopleCsv(" Anya       ,  Forger , 6   ,   Female ")[0];
    expect(person).to.deep.equal({ firstName: "Anya", lastName: "Forger", gender: "f", age: 6 });
  });
});
