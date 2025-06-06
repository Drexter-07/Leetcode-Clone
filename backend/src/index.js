import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app=express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello Guys Welcome to LeetLab");
})

app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 8080");
})





