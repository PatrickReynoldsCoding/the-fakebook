const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  userID: {
    type: mongoose.Types.ObjectId, 
    ref: "User",
  },
});

PostSchema.methods.formatDate = function() {
  return this.createdAt.toString().substring(0,10);
}

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
