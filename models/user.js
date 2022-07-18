const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Post"}],
});

const User = mongoose.model("User", UserSchema);

UserSchema.methods.formatFirstName = function() {
  return this.firstName[0].toUpperCase() + this.firstName.slice(1);
}

module.exports = User;
