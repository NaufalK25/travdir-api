const { HEADER } = require("../utils/constants");

const baseRoutes = (app) => {
    app.get("/", (req, res) => {
        res.status(200).header(HEADER).json({
            message: "Welcome to the TravDir API! 👋",
            documentation: "https://github.com/NaufalK25/travdir-api",
        });
    });
    app.get("/api", (req, res) => {
        res.status(200).header(HEADER).json({
            destination: "http://localhost:3000/api/destinations",
        });
    });
    app.get("*", (req, res) => {
        res.status(404)
            .header(HEADER)
            .json({
                success: false,
                status: 404,
                message: `Invalid url: ${req.originalUrl}`,
            });
    });
};

module.exports = {
    baseRoutes,
};
