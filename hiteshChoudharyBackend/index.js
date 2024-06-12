import 'dotenv/config'
import express from "express";
const app = express();

app.get("/" , (req , res)=>{
    res.send("hello");
})
app.get("/api" , (req , res)=>{
    res.send("welcome to our api");
})

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log(`server are running on ${PORT}`);
})