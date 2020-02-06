const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    min: 3,
    required: true
  },

  Summary: {
    type: String,
    min: 3,
    required: true
  },

  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserSchema",
      required: true
    }
  ],

  IsPub: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Book", BookSchema);
