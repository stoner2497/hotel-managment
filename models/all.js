const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Check = new Schema({
  avaialability: {
    type: Boolean,
    required: true
  }
});

module.exports = Checked = mongoose.model("check", Check);
