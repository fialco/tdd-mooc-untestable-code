import { afterEach, beforeEach, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/testable4.mjs";

describe("Testable 4: enterprise application", () => {
  describe("PasswordService", () => {
    let service;
    beforeEach(() => {
      service = new PasswordService();
    });

    test("todo", async () => {
      // TODO: write proper tests for both PasswordService and PostgresUserDao
    });
  })



  async function connectToDb() {
    return db = new pg.Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });
  }
  /*
  afterEach(() => {
    PostgresUserDao.getInstance().close();
  });

  */

  test("todo", async () => {
    // TODO: write proper tests for both PasswordService and PostgresUserDao
  });
});
