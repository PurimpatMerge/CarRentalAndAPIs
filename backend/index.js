import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.js";
import carsRoute from "./routes/car.js";
import rentsRoute from "./routes/rent.js";



const app = express();
dotenv.config();
app.set("View engine", "ejs");
app.use(express.urlencoded({ extended: false }));


const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
})

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/auth", authRoute); //FE-1
app.use("/api/car", carsRoute); //FE- unknow for car
app.use("/api/rent", rentsRoute); //FE- for Rent


app.listen(8800,()=>{
    connect()
    console.log("Connected to backend.")
})

