'use strict';
module.exports = function(app) {
  var post = require('../controller/appController');
  var comment = require('../controller/commentController');
  // Post Routes
  app.route('/post')
    .get(post.list_all_post)
    .post(post.create_a_post);
   
   app.route('/post/:postId')
    .get(post.read_a_post)
    .put(post.update_a_post)
    .delete(post.delete_a_post);
   

  //Comment Routes
  app.route('/comment')
    .get(comment.list_all_comment)
    .post(comment.create_a_comment);
   
  app.route('/comment/:commentId')
    .get(comment.read_a_comment)
    .put(comment.update_a_comment)
    .delete(comment.delete_a_comment);
    
};