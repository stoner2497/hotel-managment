const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../helpers/auth");
const mongoose = require("mongoose");

router.get("/reservation", ensureAuthenticated, (req, res) => {
  res.render("reservation");
});

module.exports = router;
