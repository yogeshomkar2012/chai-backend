// require("dotenv").config();
import dotenv from "dotenv";
// importing connection db file
import connectDb from "./db/index.js";
import express from "express";
const app = express();

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(` Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(` Mongo Db Connection Failed `, error);
  });
