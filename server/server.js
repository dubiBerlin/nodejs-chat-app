const path = require("path");
const express = require("express");
const socketIO = require("socket.io");

var http = require('http');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

/* Konfiguration von der express Middleware */
app.use(express.static(publicPath));





//__dirname current directory
//console.log("DIRECTORY: "+__dirname+'/../public');
//console.log("PUBLIC PATH: "+publicPath);


//
server.listen(3000, ()=>{
   console.log(`Server is up on ${port}`); 
});



