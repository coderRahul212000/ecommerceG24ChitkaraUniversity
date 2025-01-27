import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import morgan from "morgan"
import authRoutes from "./routes/authRoute.js"


// configure .env
dotenv.config()


connectDB();

const app = express();


const PORT = process.env.PORT || 9000

// middleware
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/auth", authRoutes)

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Chitkara</h1>")
})

app.listen(PORT, ()=>{
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white)
})

