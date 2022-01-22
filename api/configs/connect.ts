import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
    `${process.env.MONGO_URI || "mongodb://localhost:27017/"}${process.env.DB_NAME
    }`,
    (err: mongoose.CallbackError) => {
        if (!err) {
            console.log("MongoDB Connection Succeeded.");
        } else {
            console.log(`Error on DB connection: ${err}`);
        }
    }
);
