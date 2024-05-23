var express = require("express");
var router = express.Router();
var httpError = require("http-errors");

var records = require("../models/records");

router.get("/", function (_, res) {
    res.render("index", { title: "NTCU Web Programming" });
});

router.all("/action", async function (req, res, next) {
    let id = req.query.stu_id;
    let name = req.query.name;
    if (id == undefined || name == undefined)
        return next(httpError(400, "Error: Data Cannot be Empty"));

    records.addRecord(id, name);
    res.render("submit", { name: name })
})

router.get("/records", async function (_, res) {
    let allRecords = await records.getRecords();
    res.render("records", { records: allRecords });
})

module.exports = router;
