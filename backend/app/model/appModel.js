'user strict';
var sql = require('./db.js');

//Task object constructor
var Post = function(post){
    this.title = post.title;
    this.body = post.body;
    this.author = post.author;
};
Post.createPost = function (newPost, result) {    
        sql.query("INSERT INTO post set ?", newPost, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    // console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Post.getPostById = function (postId, result) {
        sql.query("Select * from post where id = ? ", postId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Post.getAllPost = function (result) {
        sql.query("Select * from post", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                //   console.log('post : ', res);  

                 result(null, res);
                }
            });   
};
Post.updateById = function(id, post, result){
  sql.query("UPDATE post SET title = ?, body = ?, author = ? WHERE id = ?", [post.title, post.body,post.author, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Post.remove = function(id, result){
    console.log(id)
     sql.query("DELETE FROM post WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Post;