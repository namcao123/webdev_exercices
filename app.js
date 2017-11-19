

var express = require('express');

var app = express();

app.get("/", function(req,res){
    res.send("Hi There");
});
app.get("/nam", function(req,res){
    res.send("Hi Nam");
});
app.get("/dog", function(req,res){
    res.send("Hi  Sid");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});