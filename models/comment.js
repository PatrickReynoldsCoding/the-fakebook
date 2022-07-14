// File: comment.js

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: String,
});

const Comment = mongoose.model("Comment", CommentSchema);


//class Comment {
// constructor(text) {
//    this.text = text;
//  }
//}

module.exports = Comment;
