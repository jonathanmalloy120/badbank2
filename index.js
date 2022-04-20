var express = require("express");
var app = express();
var cors = require("cors");
var dal = require('./dal.js'); //require package we wrote and exported from

//point to static content and cors, which is some sort of cross platform error handling thing
app.use(express.static("public"));
app.use(cors());

//create account placeholder
app.get('/account/create/:name/:email/:password', function(req,res) { 
    dal.create(req.params.name,req.params.email,req.params.password). //call create function from dal file
    then((user)=> { //then once complete
        console.log(user); //write created user to console
        res.send(user); //send back created user
    });
});


//get all accounts placeholder
app.get('/account/all', function(req,res){
    dal.all(). //call all function from dal file
    then((docs) =>{ //then once complete
        console.log(docs); //log all documents to console
        res.send(docs); //send back all documents
    });
});

var port = 3000;
app.listen(port);
console.log("running on port 3000");
