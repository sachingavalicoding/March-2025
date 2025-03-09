import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Correct usage

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
