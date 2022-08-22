const mongoose = require("mongoose");

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      maxlength: 13,
      required: true,
    },
    check_in: {
      type: String,
      maxlength: 10,
      required: true,
    },
    check_out: {
      type: String,
      maxlength: 10,
      required: true,
    },
    number_of_adults: {
      type: String,
      maxlength: 1,
    },
    number_of_children: {
      type: String,
      maxlength: 1,
    },
    query: {
      type: String,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);