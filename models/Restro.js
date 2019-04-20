const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestroSchema = new Schema({
  DishName: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Indigridents: {
    type: String,
    required: true
  },

  Price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("restro", RestroSchema);
