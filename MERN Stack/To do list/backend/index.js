import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error in Connecting Database:", error);
        process.exit(1); 
    }
};


connectDB();

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});
