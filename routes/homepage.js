var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "test-restaurant's Garden" });
});

router.delete("/", function (req, res, next) {
  res.end(500);
});

module.exports = router;
