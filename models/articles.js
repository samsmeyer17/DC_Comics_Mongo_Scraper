var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true,
  },
  saved: {
    type: Boolean, 
    default: 'false'
  },
  note: {
    type: Schema.Types.ObjectID,
    ref: "Note"
  }
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;