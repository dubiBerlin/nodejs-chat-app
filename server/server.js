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

/*
functionname: io.on()
Purpose: registers an event listener  
param 1: connection event listens to a connection
param 2: Data packed in an object */
io.on("connection", (socket)=>{
    console.log("New user connected");

    socket.emit("newMessage",{
       from : "Admin",
        text: "Welcome to the chat app",
        createdAt: new Date().getTime()
    });
    
    socket.broadcast.emit("newMessage",{
        from : "Admin",
        text: "New user joined",
        createdAt: new Date().getTime()
    });
    
    /*
    functionname: socket.emit()
    Purpose: emits events  to the client
    param 1: Eventname
    param 2: Data packed in an object*/
    socket.emit("newEmail", {
            from: "Jonny@exm.de",
            text: "Whats going on.",
            createdAt: new Date().toString()
        });
    
    socket.emit("newMessage", {
            from: "Laura",
            text: "Hello how are you",
            createdAt: new Date().toString()
        });
    
    /*
    functionname: socket.on()
    Purpose: listens on event from the client
    param 1: Eventname
    param 2: Data packed in an object received by the client */
    socket.on("createEmail", (newEmail)=>{
       console.log("New email received from client: ", newEmail); 
    });
    
    
    socket.on("createMessage", (message)=>{
        message.createdAt  = new Date().getTime().toString();
        console.log("New message received: ", message); 
        
        /*
        functionname: io.emit()
        Purpose: sends events to all connections
        param 1: Eventname
        param 2: Data packed in an object received by the client */
//        io.emit("newMessage", {
//            from: message.from, 
//            text: message.text,
//            createdAt: message.createdAt
//        });
        
        
        socket.broadcast.emit("newMessage", {
            from: message.from, 
            text: message.text,
            createdAt: message.createdAt
        });
    });
    
    
    socket.on("disconnect", ()=>{
       console.log("User was disconnected"); 
    });
});


//__dirname current directory
//console.log("DIRECTORY: "+__dirname+'/../public');
//console.log("PUBLIC PATH: "+publicPath);


//
server.listen(3000, ()=>{
   console.log(`Server is up on ${port}`); 
});



