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

  password: {
    type: String,
    min: 5,
    required: true
  },

  bod: {
    type: Date
  },

  role: [
    {
      admin: { type: Boolean, default: false },
      user: { type: Boolean, default: true }
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
