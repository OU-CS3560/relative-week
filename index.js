const functions = require("@google-cloud/functions-framework");
const { DateTime } = require("luxon");
const { getRelativeWeek } = require("./functions");

functions.http("relativeWeek", (req, res) => {
  const genesisDateText = decodeURI(req.query.genesisDate || "2024-01-15");
  const timezoneName = decodeURI(req.query.tz || "America%2FNew_York");
  const responseFormat = req.query.format || "shields-io-json";

  const genesisDate = DateTime.fromISO(genesisDateText, { zone: timezoneName });
  const today = DateTime.local().setZone(timezoneName);

  const numberOfWeeks = getRelativeWeek(genesisDate, today);

  if (responseFormat === "shields-io-json") {
    res.json({
      schemaVersion: 1,
      label: "week (relative)",
      message: numberOfWeeks.toString(),
      color: "blue",
      style: "for-the-badge",
    });
  } else if (responseFormat === "json") {
    // With some debugging information.
    res.json({
      relativeWeeks: numberOfWeeks,
      status: "success",
      debug: {
        genesisDate: genesisDate.toString(),
        genesisDateWeekNumber: genesisDate.weekNumber,
        todayDate: today.toString(),
        todayDateWeekNumber: today.weekNumber,
      },
    });
  } else if (responseFormat === "text") {
    // Assume plain text response.
    res.send(
      `this is week ${numberOfWeeks} relative to ${genesisDate.toLocaleString(
        DateTime.DATETIME_FULL
      )}`
    );
  } else {
    res.json({
      status: "fail",
      message: "Unknown format. Pick from 'shields-io-json', 'json' or 'text'",
    });
  }
});
