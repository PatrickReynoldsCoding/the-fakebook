// File: spec/models/comment.spec.js

var mongoose = require("mongoose");

require("../mongodb_helper");

var Comment = require("../../models/comment");

describe("Comment model", () => {
   beforeEach((done) => {
     mongoose.connection.collections.comments.drop(() => {
       done();
     });
   });

  it("has a comment", () => {
    var comment = new Comment({ text: "some comment"});
    expect(comment.text).toEqual("some comment");
  });

//  it("has a comment", () => {
//    var comment = new Comment("some comment");
//    expect(comment.text).toEqual("some comment");
//  });

});
