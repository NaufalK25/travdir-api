import bodyParser from "body-parser";
import dotenv from 'dotenv';
import express, { Express } from "express";
import morgan from "morgan";
import { baseUrl } from "./api/configs/constants";
import { baseRoutes } from "./api/routes/baseRoutes";
import { destinationRoutes } from "./api/routes/destinationRoutes";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.use(express.static("public"));

require("./api/configs/connect");

destinationRoutes(app);
baseRoutes(app);

app.listen(port, (): void => {
    console.log(`TravDir API is listening to ${baseUrl}`);
});
