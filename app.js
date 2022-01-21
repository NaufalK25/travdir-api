const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

require("./api/utils/connect");

const {
    touristDestinationRoutes,
} = require("./api/routes/TouristDestinationRoutes");
const { baseRoutes } = require("./api/routes/baseRoutes");

touristDestinationRoutes(app);
baseRoutes(app);

app.listen(port, () => {
    console.log(`TravDir API is listening to http://localhost:${port}`);
});
