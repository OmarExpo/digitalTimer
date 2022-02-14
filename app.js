const express = require("express");
const app = express()

app.use(express.static("./public"))

app.get("/", function(req,res) 
{
  res.sendFile(__dirname + "/public/index.html");
  //res.send("Welcome to RestAPI from nodeJS")
})

const host = '0.0.0.0';
let port = process.env.port || 5000;
//const port = 3000;

app.listen(port,host, () => console.log("Server has started successfully!!"));
