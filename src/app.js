import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cors configration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// json limt configration
app.use(express.json({ limit: "16kb" }));
// data from url confgration and setting limt
app.use(express.urlencoded({ extended: true, limit: true }));
// file save in public
app.use(express.static("public"));
app.use(cookieParser());
export { app };
