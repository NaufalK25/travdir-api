const { baseUrl, HEADER } = require("../configs/constants");

const baseRoutes = (app) => {
    app.get("/", (req, res) => {
        res.status(200)
            .header(HEADER)
            .json({
                success: true,
                status: 200,
                message: "OK",
                results: {
                    greet: "Welcome to the TravDir API! 👋",
                    documentation: "https://github.com/NaufalK25/travdir-api",
                    baseUrl,
                },
            });
    });
    app.get("/api", (req, res) => {
        res.status(200)
            .header(HEADER)
            .json({
                success: true,
                status: 200,
                message: "OK",
                resutls: {
                    destination: {
                        url: `${baseUrl}destinations`,
                        method: ["GET", "POST"],
                    },
                },
            });
    });
    app.get("*", (req, res) => {
        res.status(404).header(HEADER).json({
            success: false,
            status: 404,
            message: `Invalid URL: ${req.originalUrl}`,
        });
    });
};

module.exports = {
    baseRoutes,
};
