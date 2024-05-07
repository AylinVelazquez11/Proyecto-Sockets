var express = require('express');
var app=express();

var server=require('http').server(app);

var io = require ('socket.io')(server);

app.get('/', function(req,res){
    res.status(200).send("Hola mundo");
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");
});

