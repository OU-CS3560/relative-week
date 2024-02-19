// Using the ISO Week Date (https://en.wikipedia.org/wiki/ISO_week_date)
// So the week starts on Monday and ends on Sunday.
const getRelativeWeek = (genesisDate, today) => {
  return today.weekNumber - genesisDate.weekNumber + 1;
};

exports.getRelativeWeek = getRelativeWeek;
