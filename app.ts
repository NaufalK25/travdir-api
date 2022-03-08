import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import { baseUrl } from "./api/config/constants";
import { baseRoutes } from "./api/routes/baseRoutes";
import { destinationRoutes } from "./api/routes/destinationRoutes";

// Get all environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Third Party Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
// Express Middleware
app.use('/uploads', express.static('uploads'));

// Connect to database
require("./api/config/database");

// Routes
destinationRoutes(app);
baseRoutes(app);

// Start server
app.listen(port, () => {
    console.log(`TravDir API is listening to ${baseUrl}`);
});
