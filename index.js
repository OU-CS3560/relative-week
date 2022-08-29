var differenceInWeeks = require('date-fns/differenceInWeeks');

exports.relativeWeek = (req, res) => {
    const genesisDate = new Date('August 22, 2022');
    const today = new Date();
    const type = req.query.type || 'ak';

    const numberOfWeeks = differenceInWeeks(today, genesisDate) + 1;

    const responseFormat = req.query.format || 'shields-io-json';

    if (responseFormat === 'json') {
        res.json({"weeks": numberOfWeeks, "genesisDate": genesisDate.toISOString()});
    } else if (responseFormat === 'shields-io-json') {
        res.json({"schemaVersion": 1, "label": "week (relative)", "message": numberOfWeeks.toString(), "color": "blue", "style": "for-the-badge"});
    } else {
        // Assume plain text response.
        res.send(`this is week ${numberOfWeeks} relative to the genesis date`);
    }
};
