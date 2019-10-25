'use strict';
module.exports = function(app) {
  var post = require('../controller/appController');

  // Post Routes
  app.route('/post')
    .get(post.list_all_post)
    .post(post.create_a_post);
   
   app.route('/post/:postId')
    .get(post.read_a_post)
    .put(post.update_a_post)
    .delete(post.delete_a_post);
    };