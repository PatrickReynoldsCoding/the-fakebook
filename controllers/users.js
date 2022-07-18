const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Index: (req, res) => {
    User.find()
    .populate("posts")
    .populate("comments")
    .populate("author")
    .exec((err, users) => {
              if (err) {
          throw err;
        }
      res.render("users/profile", {
        users: users });
    });
  },

  Create: (req, res) => {
    const firstNameCapitalized = req.body.firstName[0].toUpperCase() + req.body.firstName.substring(1).toLowerCase();
    const lastNameCapitalized = req.body.lastName[0].toUpperCase() + req.body.lastName.substring(1).toLowerCase();
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      firstName: firstNameCapitalized,
      lastName: lastNameCapitalized,
    });
    user.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = UsersController;
