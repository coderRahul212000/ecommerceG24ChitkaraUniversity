import mongoose from 'mongoose'
import colors  from 'colors'

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB database samjh mai aya kya ${conn.connection.host}`.bgMagenta.white)
    }
     catch (error) {
        console.log(`Error in MONGODB ${error}`.bgRed.white)
    }
   
}

export default connectDB;