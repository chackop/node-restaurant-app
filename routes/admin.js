var express = require("express");
var router = express.Router();
var debug = require("debug")("test-restaurant:route:admin");
const _ = require("lodash");
const reservations = require("../lib/reservations");

/* GET admin listing. */
router.get("/admin", function (req, res, next) {
  reservations.fetch().then((reservations) => {
    res.render("admin", {
      title: "Booking Requests - test-restaurant's Garden",
      reservations,
      header: _.keys(reservations[0]),
    });
  });
});

module.exports = router;
