const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const { baseUrl } = require("./api/utils/constants");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./api/utils/connect");

const { destinationRoutes } = require("./api/routes/DestinationRoutes");
const { baseRoutes } = require("./api/routes/baseRoutes");

destinationRoutes(app);
baseRoutes(app);

app.listen(port, () => {
    console.log(`TravDir API is listening to ${baseUrl}`);
});
