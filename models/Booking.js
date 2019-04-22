const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reserve = new Schema({
  user: {
    type: String,
    required: true
  },
  room: {
    type:String,
    required:true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  },
  Adults: {
    type:Number,
    required:true
  },
  Children: {
    type:Number,
  },

  Country: {
    type: String,
    requirecd: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  Address1: {
    type: String,
    required: true
  },
  Address2: {
    type:String,
  },
  Town: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("reserve", Reserve);
