const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  roomNo: {
    type: Number,
    required: true
  },
  roomtype: {
    type: String,
    required: true
  },
  roomtotal: {
    type: Number,
    required: true
  },
  roomphoto: {
    type: Array
    // required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Description: {
    type: String
  },
  MaxPerson: {
    type: Number
  },
  availability: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("rooms", RoomSchema);
