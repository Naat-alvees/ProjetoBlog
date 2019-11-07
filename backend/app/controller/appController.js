'use strict';

var Post = require('../model/appModel.js');

exports.list_all_post = function(req, res) {
  Post.getAllPost(function(err, post) {

    console.log('controller')
    if (err)
      res.send(err);
      // console.log('res', post);
    res.send(post);
  });
};



exports.create_a_post = function(req, res) {
  var new_post = new Post(req.body);
  console.log(new_post);
  //handles null error 
   if(!new_post.title || !new_post.body || !new_post.author){

        res.status(400).send({ error:true, message: 'Esta caindo aqui' });

    }else{
        Post.createPost(new_post, function(err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    }
};


exports.read_a_post = function(req, res) {
  Post.getPostById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.update_a_post = function(req, res) {
  Post.updateById(req.params.postId, new Post(req.body), function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.delete_a_post = function(req, res) {
  console.log("entrou")
  Post.remove( req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};