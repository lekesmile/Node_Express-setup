const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    min: 3,
    required: true
  },

  lastname: {
    type: String,
    min: 3,
    required: true
  },

  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookSchema",
      required: true
    }
  ],

  bod: {
    type: Date
  }
});

module.exports = mongoose.model("User", UserSchema);
