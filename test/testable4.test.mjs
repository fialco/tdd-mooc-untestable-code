import { afterEach, beforeEach, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/testable4.mjs";
import { expect } from "chai";

class fakeUserDao {
  users = []

  async save(user) {
    this.users.push(user)
  }
}


async function connectToDb() {
  return db = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });
}


describe("Testable 4: enterprise application", () => {
  describe("fakeUserDao", () => {
    let fakeUsers
    beforeEach(() => {
      fakeUsers = new fakeUserDao()
    })

    test("can save users", async () => {
      fakeUsers.save({ user_id: 123 })
      expect(fakeUsers.users[0].user_id).to.equal(123)
    });
  })

  describe("PasswordService", () => {
    let users = new fakeUserDao()
    let service;
    beforeEach(() => {
      service = new PasswordService(users);
    });



    test("changes password with correct old password", async () => {
      return
    });
  })



  /*
  afterEach(() => {
    PostgresUserDao.getInstance().close();
  });

  */

  test("todo", async () => {
    // TODO: write proper tests for both PasswordService and PostgresUserDao
  });
});
