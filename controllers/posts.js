const Post = require("../models/post");

const PostsController = {
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
      }

      res.render("posts/index", { posts: posts });
    });
  },
  New: (req, res) => {
    res.render("posts/new", {});
   
  },
  Create: (req, res) => {
     const post = new Post({
      message: req.body.message,
      userID: req.body.userID,
  });
    post.save((err) => {
      if (err) {
        throw err;
      }
  
      res.status(201).redirect("/posts");
    
    });
  },

  Delete:(req, res) => {
    Post.deleteOne({_id: req.body }, (err, posts) => {
      if (err) {
        throw err;
      }
      

  
     res.status(201).redirect("/posts");
   
   });
 },
};

module.exports = PostsController;
