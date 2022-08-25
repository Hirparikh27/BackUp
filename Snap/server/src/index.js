import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Database Connected Succesfully");
});

app.use("/user", userRouter);
app.listen(8000, () => {
  console.log("Server is Running On Port 8000");
});
