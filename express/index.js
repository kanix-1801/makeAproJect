import express from "express";

const app = express();


const PORT = 3000;

app.get("/" , (req , res)=>{
    res.send("<h1>working...<h1/>");
    // res.send("res"); 
    // console.log(req.rawHeaders);
});

app.listen(PORT , ()=>{
    console.log(`server are running on ${PORT}`);
})