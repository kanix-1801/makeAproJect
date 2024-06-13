import 'dotenv/config'
import express from "express";
import cors from "cors"
const app = express();

app.use(cors())
app.get("/" , (req , res)=>{
    res.send("hello");
})
app.get("/api" , (req , res)=>{
    const jokes = [
        {
          setup: "Why don't scientists trust atoms?",
          punchline: "Because they make up everything!"
        },
        {
          setup: "Why did the scarecrow win an award?",
          punchline: "Because he was outstanding in his field!"
        },
        {
          setup: "Why don't programmers like nature?",
          punchline: "It has too many bugs."
        },
        {
          setup: "What do you get when you cross a snowman and a vampire?",
          punchline: "Frostbite."
        },
        {
          setup: "Why was the math book sad?",
          punchline: "Because it had too many problems."
        },
        {
          setup: "What do you call fake spaghetti?",
          punchline: "An impasta!"
        },
        {
          setup: "Why did the bicycle fall over?",
          punchline: "Because it was two-tired!"
        },
        {
          setup: "What do you call cheese that isn't yours?",
          punchline: "Nacho cheese!"
        },
        {
          setup: "Why don't some couples go to the gym?",
          punchline: "Because some relationships don't work out."
        },
        {
          setup: "How does a penguin build its house?",
          punchline: "Igloos it together."
        }
      ];
    res.send(jokes);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`server are running on ${PORT}`);
})