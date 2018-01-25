
var socket = io();

socket.on("connect", function() {
 console.log("Connected to server"); 
    
     socket.emit("createEmail", {
            to: "david@mail.de",
            text: "Hello David.",
            createdAt: new Date().toString()
        });

    socket.emit("createMessage", {
            from:"Jenny",
            text: "Hello Giovanni",
        });
    
});


socket.on("disconnect", function() {
 console.log("Disconnected from server"); 
});
          
    
    
socket.on("newEmail", function(email){
    console.log("New Email", JSON.stringify(email)); 
});

   
    
socket.on("newMessage", function(message){
    console.log("New message__", JSON.stringify(message)); 
});
