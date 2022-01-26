import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import express, { Express } from "express";
import morgan from "morgan";
import { baseUrl } from "./api/configs/constants";
import { baseRoutes } from "./api/routes/baseRoutes";
import { destinationRoutes } from "./api/routes/destinationRoutes";
import { err500Route } from "./api/routes/errorRoutes";

// Get all environment variables
dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// Third Party Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
// Express Middleware
app.use('/uploads', express.static('uploads'));

// Connect to database
require("./api/configs/connect");

// Routes
destinationRoutes(app);
baseRoutes(app);
app.use(err500Route);

// Start server
app.listen(port, (): void => {
    console.log(`TravDir API is listening to ${baseUrl}`);
});
