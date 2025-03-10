import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/web/userRoutes.js";
import productRouter from "./routes/web/productRoutes.js";
import cors from "cors"
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use("/api/web/user",userRouter);
app.use("/api/web/product",productRouter);
// Connect Database 
const connectDB = () => {
    mongoose.connect(process.env.DBURL)
        .then(() => {
            console.log("Connected to Database");
            app.listen( process.env.PORT , () => {
                console.log(" SERVER IS RUNNING ON PORT " , process.env.PORT);
            });
        })
        .catch((e) => {
            console.log("ERROR IN DB:", e);
        });
};

connectDB();
