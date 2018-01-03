const Potty = require("../models/pottys");

module.exports = {
    showPottys: showPottys,
    showAvailablePottys: showAvailablePottys,
    showInUsePottys: showInUsePottys
}

function showPottys(req, res) {
    Potty.scan().loadAll().exec(onScan);

    function onScan(err, data) {
        if (err) {console.error("Unable to scan the table. Error JSON: ", JSON.stringify(err,null,2));}
        else {
            console.log("Potty Scan succeeded.");
            res.status(200).json(data.Items);
        }
    }
}

function showAvailablePottys(req, res) {
    Potty.scan().where('status').equals('available').exec(callback);

    function callback(err, data) {
        if (err) { console.error("Unable to scan the table. Error JSON: ", JSON.stringify(err,null,2)); }
        else {
            console.log("Scanned available pottys.");
            res.status(200).json(data.Items);
        }
    }
}

function showInUsePottys(req, res) {
    Potty.scan().where('status').equals('in-use').exec(callback);

    function callback(err, data) {
        if (err) { console.error("Unable to scan the table. Error JSON: ", JSON.stringify(err,null,2)); }
        else {
            console.log("Scanned In-use pottys.");
            res.status(200).json(data.Items);
        }
    }
}
