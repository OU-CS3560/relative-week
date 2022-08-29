const assert = require('chai').assert;
const functions = require('../functions');

describe('Functions test', () => {
  describe('getRelativeWeek', () => {
    it('should return correct week offset for all day in the first week after the genesis date', () => {
      const genesisDate = new Date('August 21, 2022');
      var today = new Date('August 28, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

      today = new Date('August 29, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

      today = new Date('August 30, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

      today = new Date('August 31, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

      today = new Date('September 1, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

      today = new Date('September 2, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);

      today = new Date('September 3, 2022');
      assert.equal(functions.getRelativeWeek(genesisDate, today), 2);
    });
  })
});
