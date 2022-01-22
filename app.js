const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const { baseUrl } = require("./dist/api/configs/constants");
const { destinationRoutes } = require("./dist/api/routes/destinationRoutes");
const { baseRoutes } = require("./dist/api/routes/baseRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./dist/api/configs/connect");

destinationRoutes(app);
baseRoutes(app);

app.listen(port, () => {
    console.log(`TravDir API is listening to ${baseUrl}`);
});
