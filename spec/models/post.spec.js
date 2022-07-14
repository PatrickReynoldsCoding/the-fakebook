var mongoose = require("mongoose");

require("../mongodb_helper");
var Post = require("../../models/post");


describe("Post model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.posts.drop(() => {
      done();
    });
  });

  it("has a message", () => {
    var post = new Post({ message: "some message" });
    expect(post.message).toEqual("some message");
  });

  it("can list all posts", (done) => {
    Post.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts).toEqual([]);
      done();
    });
  });

  it("can save a post", (done) => {
    var post = new Post({ message: "some message" });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "some message" });
        done();
      });
    });
  });

  it("may have no comments", (done) => {
    var post = new Post({ message: "some message", comments: null });
  
    post.save((err) => {
      expect(err).toBeNull();
  
      Post.find((err, posts) => {
        expect(err).toBeNull();
  
        expect(posts[0].message).toBe("some message");
        expect(posts[0].comments).toBeNull();
        done();
      });
    });
  
  });
  
  it("can have a comment", (done) => {
    var post = new Post({ message: "some message", comments: ["some comment"] });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0].message).toBe("some message");
        expect(posts[0].comments).toEqual(expect.arrayContaining(["some comment"]));
        done();
      });
    });
  });

  it("can have multiple comments", (done) => {
    var post = new Post({ message: "some message", comments: ["comm1", "comm2", "comm3"] });
  
    post.save((err) => {
      expect(err).toBeNull();
  
      Post.find((err, posts) => {
        expect(err).toBeNull();
  
        expect(posts[0].message).toBe("some message");
        expect(posts[0].comments).toEqual(expect.arrayContaining(["comm1", "comm2", "comm3"]));
        done();
      });
    });
  });

});
