const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes/todoRoutes.js")
const server = express();

const dbUrl = "mongodb+srv://ckDebMan:ISTj19oQyN5hBa0J@cluster0.sknmlkn.mongodb.net/?retryWrites=true&w=majority"

server.use(cors({
    origin: "http://localhost:5173"
}));

server.use(express.json());
server.use(routes)

mongoose.connect(dbUrl)

const db= mongoose.connection;
db.on('error', err => console.log("not connected to db"+ err.message))

db.once('open',()=>{
    console.log("connected successfully to db")
})

server.get("/", (req, res)=>{
    res.send("Hello world!");
})


server.listen(8000, function check(error){
    if(error){
        console.log("Error at the port");
    }else{
        console.log("Startedddddd");
    }
});

