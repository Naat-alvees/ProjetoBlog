'use strict';

var Comment = require('../model/commentModel.js');

exports.list_all_comment = function(req, res) {
  Comment.getAllComment(function(err, comment) {

    console.log('controller')
    if (err)
      res.send(err);
      // console.log('res', comment);
    res.send(comment);
  });
};



exports.create_a_comment = function(req, res) {
  var new_comment = new Comment(req.body);

  //handles null error 
   if(!new_comment.title || !new_comment.body || !new_comment.email || !new_comment.post_id || !new_comment.author){
        res.status(400).send({ error:true, message: 'Please provide title/body/email/post_id' });

    }else{
        Comment.createComment(new_comment, function(err, comment) {
            if (err)
                res.send(err);
            res.json(comment);
        });
    }
};


exports.read_a_comment = function(req, res) {
  Comment.getCommentById(req.params.commentId, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};


exports.update_a_comment = function(req, res) {
  Comment.updateById(req.params.commentId, new Comment(req.body), function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};


exports.delete_a_comment = function(req, res) {
  Comment.remove( req.params.commentId, function(err, comment) {
    if (err)
      res.send(err);
    res.json({ message: 'Comment successfully deleted' });
  });
};