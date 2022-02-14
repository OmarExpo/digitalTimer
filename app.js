const express = require("express");
const app = express()

app.use(express.static("public"))

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
  //res.send("<h1>Welcome to RestAPI from nodeJS</h1>")
})


//const port = process.env.port || 3000;
const port = 3000;

app.listen(port, () => console.log("Server has started successfully!!"));
