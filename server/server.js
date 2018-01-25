const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;

//__dirname current directory
//console.log("DIRECTORY: "+__dirname+'/../public');
//console.log("PUBLIC PATH: "+publicPath);

var app = express();

/* Konfiguration von der express Middleware */
app.use(express.static(publicPath));


//
app.listen(3000, ()=>{
   console.log(`Server is up on ${port}`); 
});



git remote add origin https://github.com/dubiBerlin/nodejs-chat-app.git
git push -u origin master