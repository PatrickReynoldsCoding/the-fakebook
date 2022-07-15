const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  //way around cultures not having first/last name
  firstName: {
    type: String,
    required: false,
  },
  lastName: String,
  // for the profile page
  // posts: [
  //   {type: mongoose.Types.ObjectId, ref: "Post"},
  // ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
