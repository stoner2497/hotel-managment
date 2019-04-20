const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Restro");
const Restro = mongoose.model("restro");

router.get("/restaurant", (req, res) => {
  Restro.find({}).then(restro => {
    res.render("restro", {
      restro: restro
    });
  });
});

module.exports = router;
