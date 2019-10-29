'user strict';
var sql = require('./db.js');

//Task object constructor
var Contact = function(contact){
    this.nome = contact.nome;
    this.email = contact.email;
    this.mensagem = contact.mensagem;
};
Contact.createContact = function (newContact, result) {    
        sql.query("INSERT INTO contact set ?", newContact, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Contact.getContactById = function (contactId, result) {
        sql.query("Select nome, email, mensagem from contact where id = ? ", contactId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Contact.getAllContact = function (result) {
        sql.query("Select * from contact", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact : ', res);  

                 result(null, res);
                }
            });   
};
Contact.updateById = function(id, contact, result){
  sql.query("UPDATE contact SET nome = ?, email = ?, mensagem = ? WHERE id = ?", [contact.nome, contact.email, contact.mensagem, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Contact.remove = function(id, result){
     sql.query("DELETE FROM contact WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Contact;