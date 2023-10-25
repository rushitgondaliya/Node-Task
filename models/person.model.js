const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const personSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const person = mongoose.model("person", personSchema);
module.exports = person;
