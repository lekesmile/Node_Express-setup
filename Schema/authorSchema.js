const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  Name: {
    type: String,
    required: true
  },

  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookSchema",
      required: true
    }
  ]
});
