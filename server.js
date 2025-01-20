import express from "express"
import colors from "colors"
import dotenv from "dotenv"


// configure .env
dotenv.config()

const app = express();


const PORT = process.env.PORT || 9000

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Chitkara</h1>")
})

app.listen(PORT, ()=>{
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white)
})

