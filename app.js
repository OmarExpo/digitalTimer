import express from "express";
const app = express()

app.use(express.static("public"))

app.get("/", (req,res) => {

})


let port = process.env.port;
if(port == null || port == ''){
  port = 3000;
}


app.listen(port, () => console.log("Server has started successfully!!"));
