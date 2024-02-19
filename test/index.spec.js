const { DateTime } = require("luxon");
const assert = require("chai").assert;

const functions = require("../functions");

describe("getRelativeWeek", () => {
  it("should return 1 for dates on the same week", () => {
    const genesisDate = DateTime.fromISO("2022-08-22");

    var today = DateTime.fromISO("2022-08-22");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 1);

    today = DateTime.fromISO("2022-08-24");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 1);

    today = DateTime.fromISO("2022-08-27");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 1);

    // Week starts on Monday, so this Sunday is still part of the
    // first week
    today = DateTime.fromISO("2022-08-28");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 1);
  });

  it("should return 2 for dates on the next week", () => {
    const genesisDate = DateTime.fromISO("2022-08-22");

    var today = DateTime.fromISO("2022-08-29");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

    today = DateTime.fromISO("2022-08-30");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

    today = DateTime.fromISO("2022-08-31");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

    today = DateTime.fromISO("2022-09-01");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

    today = DateTime.fromISO("2022-09-02");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

    today = DateTime.fromISO("2022-09-03");
    assert.equal(functions.getRelativeWeek(genesisDate, today), 2);
  });
});
