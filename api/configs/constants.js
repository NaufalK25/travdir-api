require("dotenv").config();

const baseUrl = `http://localhost:${process.env.port || 3000}/api/`;

const HEADER = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
};

module.exports = {
    baseUrl,
    HEADER,
};
