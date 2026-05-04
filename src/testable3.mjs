import { readFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";

// Similar to testing randomness previously, the file reading should be in
// its own function and parsing in its own as suggested in https://tdd.mooc.fi/3-challenges/
// This way only the file reading function should be async

export async function readUtf8File(filePath) {
  return await readFile(filePath, { encoding: "utf8" });
}

export function parsePeopleCsv(csvData) {
  const records = parse(csvData, {
    skip_empty_lines: true,
    trim: true,
  });
  return records.map(([firstName, lastName, age, gender]) => {
    const person = {
      firstName,
      lastName,
      gender: gender.charAt(0).toLowerCase(),
    };
    if (age !== "") {
      person.age = parseInt(age);
    }
    return person;
  });
}
