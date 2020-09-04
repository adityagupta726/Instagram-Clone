// npm init -y
// npm i express
// npm i nodemon --save-dev
// create start script in package.json => "start":"nodemon crud/api.js"
// npm start- terminal
const express = require("express");
const { post, get } = require("selenium-webdriver/http");
const app = express();
const userDB = require("./user.json");
const fs = require("fs");
const path = require("path");

// REST API
// HTTP request =>
// create => post
// read => get
// update => patch 
// delete => delete 

app.use(express.json());
app.post("/api/users",function(req,res){
let user = req.body;
userDB.push(user);
fs.writeFileSync(path.join(__dirname,"user.json"),JSON.stringify(userDB));

res.status(201).json({
    success:"successful",
    user:user
})
})
// app.get("/api/users",function(req,res){
// console.log("Recieved req");
// res.status(200).json({
//     status:"Request Successfully received from client",
// })
app.listen(3000,function(){
    console.log("Server is listening at port 3000")
})


