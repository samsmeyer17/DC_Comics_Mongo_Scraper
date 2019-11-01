import mongoose from "mongoose";

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
  },
  note: {
    type: Schema.Types.ObjectID,
    ref: "Note"
  }
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;