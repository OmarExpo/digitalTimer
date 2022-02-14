const express = require("express");
const app = express()

app.use(express.static("public/"))

app.get("/", (req,res) => {
  //res.sendFile(__dirname + "/public/html/index.html");
})


const port = process.env.port || 3000;


app.listen(port, () => console.log("Server has started successfully!!"));