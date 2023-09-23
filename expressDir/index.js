const express = require("express");
const app = express();

// console.log(app);

const port = 8080;

app.listen(port,()=>{
    console.log(`app is listening through the port ${port}`);
})


app.get("/:username/:id",(req,res)=>{

    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
})

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("nothing search");
    }
    let response = `Search result of ${q}`;
    res.send(response);
})

// app.get("/help",(req,res)=>{
//    res.send("You contacted help path");
// })

// app.get("*",(req,res)=>{
//    res.send("Sorry this Path does not exist");
// })

// app.post("/",(req,res)=>{
//     res.send("You send a post request");
// })

// app.use((req,res)=>{
//     console.log("Request Received");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(code);
//     // res.send({
//     //     name:'apple',
//     //     color:'red'
//     // })
// })

