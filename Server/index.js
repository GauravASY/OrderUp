import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { userRouter } from './Routes/userRoutes.js';
import { restRouter } from './Routes/restRoutes.js';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin:  "https://order-up-c8pt.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,   
  }));

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  })
  
app.get("/", (req, res) =>{
    res.json({msg : "Server is working"});
})


mongoose.connect(`${process.env.DATABASE_URL}`)
 .then(()=> console.log("Connected to Database")).catch((e)=> console.log(e.code + `${" "} Error in connecting to Database`));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/restaurant", restRouter);


app.listen(3000);