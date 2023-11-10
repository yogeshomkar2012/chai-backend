// require("dotenv").config();
import dotenv from "dotenv";
// importing connection db file
import connectDb from "./db/index.js";
// const app = express();

dotenv.config({
  path: "./env",
});

connectDb();
