const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UtilitySchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("utility", UtilitySchema);
