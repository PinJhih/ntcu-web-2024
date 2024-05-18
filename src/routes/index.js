var express = require("express");
var router = express.Router();

var users = require("../models/user");

router.get("/", function (_, res) {
    res.render("index", { title: "NTCU Web Programming" });
});

module.exports = router;
