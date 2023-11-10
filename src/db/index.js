// import mongoose
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
const app = express();

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MOGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection Failed", error);
    process.exit(1);
  }
};

export default connectDb;
