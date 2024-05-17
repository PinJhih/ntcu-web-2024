// import dependencies
var express = require("express");
var path = require("path");
var httpError = require("http-errors");

// create instances of middleware
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var staticFiles = express.static(path.join(__dirname, "../public"));

// create instances of routers
var indexRouter = require("./routes/index");

// create instance of express APP
var app = express();

// view settings
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// bind middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static files
app.use("/public", staticFiles);

// bind routers
app.use("/", indexRouter);

// not found error handler
app.use(function (_, _, next) {
  next(httpError(404, "Not found"));
});

// http error handler
app.use(function (err, _, res, _) {
  res.locals.status = err.status || 500;
  res.locals.message = err.message || "Internal error";
  res.locals.error = res.app.get("env") === "development" ? err.stack : "";

  res.status(res.locals.status);
  res.render("error");
});

module.exports = app;
