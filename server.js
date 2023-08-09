import express from 'express';
import Colors from 'colors';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import morgan from 'morgan';
import authRoute from './routes/authRoute.js'

//configration env
dotenv.config();

//database connect
ConnectDB();

//rest object
const app = express()

//middelwares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoute);

//rest api create
app.get('/',(req,res) =>{
        res.send("<h1>Welcome to ecommerce app</h1>");
    // res.send({
    //     // message:"Welcome to ecommerce app";
    // })
})

//port
const Port = process.env.Port || 8080;
//run server
app.listen(Port,() =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${Port}`.bgCyan.white);
})