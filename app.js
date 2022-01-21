const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

const HEADER = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
};

app.get("/", (req, res) => {
    res.header(HEADER).json({
        message: "Selamat datang di TravDir API! 👋",
        documentation: "",
    });
});

app.listen(port, () => {
    console.log(`TravDir API is listening to http://localhost:${port}`);
});
