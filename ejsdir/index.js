const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log(`listening throught the port${port}`);
})

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.get("/ig/:username",(req,res)=>{
    const {username} = req.params;
    let data = require("./data.json");
    let userdata = data[username];
    if(userdata){
        res.render("instagram.ejs",{userdata});
    }else{
        res.render("error.ejs");
    }
})

app.get("/hello",(req,res)=>{

    res.send("Hello");
})

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/home",(req,res)=>{
    res.render("home.ejs");
    // res.send("This is home");
})
app.get("/rolldice",(req,res)=>{
    let diceValue =  Math.floor(Math.random()*6) +1;
    res.render("rollDice.ejs",{num:diceValue});
    // res.send("This is home");
})