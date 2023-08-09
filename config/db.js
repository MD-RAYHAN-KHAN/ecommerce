import mongoose from "mongoose";
import colors from "colors"
import dotenv from "dotenv"


const ConnectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URl)
        console.log(`Connected To MongoDB DataBase ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`error in MongoDB ${error}`.bgRed.white);
    }
}

export default ConnectDB;