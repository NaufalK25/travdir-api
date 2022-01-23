import express, { Application } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
require("dotenv").config();

import { baseUrl } from "./api/configs/constants";
import { destinationRoutes } from "./api/routes/destinationRoutes";
import { baseRoutes } from "./api/routes/baseRoutes";

const app: Application = express();
const port: string | number = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./api/configs/connect");

destinationRoutes(app);
baseRoutes(app);

app.listen(port, (): void => {
    console.log(`TravDir API is listening to ${baseUrl}`);
});
