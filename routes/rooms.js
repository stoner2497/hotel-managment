const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Rooms");
const Rooms = mongoose.model("rooms");
require('../models/Utility')
const Utility = mongoose.model('utility')
router.get("/", (req, res) => {
  Rooms.find({}).then(rooms => {
    Utility.find({})
     .then(utility => {
      res
      .render("index", {
        rooms: rooms,
        utility:utility
      })
     })
      
  }).catch(err => console.log(err));
});

router.get("/rooms", (req, res) => {
  Rooms.find({}).then(room => {
    res.render("rooms", {
      room: room
    });
  });
});

router.get("/roomsdetail/:id", (req, res) => {
  Rooms.findOne({ _id: req.params.id }).then(rooms => {
    res.render("roomdetail", {
      rooms: rooms
    });
  });
});

module.exports = router;
