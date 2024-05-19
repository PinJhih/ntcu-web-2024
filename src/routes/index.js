var express = require("express");
var router = express.Router();

var records = require("../models/records");

router.get("/", function (_, res) {
    res.render("index", { title: "NTCU Web Programming" });
});

router.all("/action", async function (req, res) {
    let id = req.query.stu_id;
    let name = req.query.name;
    records.addRecord(id, name);
    res.end("<h1>OK</h1>");
})

router.get("/records", async function (_, res) {
    let allRecords = await records.getRecords();
    res.render("records", { records: allRecords });
})

module.exports = router;
