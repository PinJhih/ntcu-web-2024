var express = require("express");
var router = express.Router();

var users = require("../models/user");

router.get("/", function (_, res) {
    let user = users.getUserInfo();
    res.locals.username = user.name;
    res.render("index", { title: "Welcome to my Project!" });
});

module.exports = router;
