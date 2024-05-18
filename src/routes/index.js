var express = require("express");
var router = express.Router();

var users = require("../models/user");

router.get("/", function (_, res) {
    res.render("index", { title: "NTCU Web Programming" });
});

router.all("/action", function (req, res) {
    let id = req.params.stu_id;
    let name = req.params.name;
    console.log(id, name);
    res.send("<h1>OK</h1>");
})

module.exports = router;
