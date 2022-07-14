// File: comment.js

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: String,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
