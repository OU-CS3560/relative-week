var differenceInWeeks = require('date-fns/differenceInWeeks');

const getRelativeWeek = (genesisDate, today) => {
  today = today || new Date();
  return differenceInWeeks(today, genesisDate) + 1;
};

exports.getRelativeWeek = getRelativeWeek;
