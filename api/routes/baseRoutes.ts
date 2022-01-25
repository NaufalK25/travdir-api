import { Request, Response, Express, } from 'express';

import { apiUrl, HEADER, } from '../configs/constants';

export const baseRoutes = (app: Express): void => {
    app.get("/", (req: Request, res: Response) => {
        res.status(200)
            .header(HEADER)
            .json({
                success: true,
                status: 200,
                message: "OK",
                results: {
                    greet: "Welcome to the TravDir API! 👋",
                    documentation: "https://github.com/NaufalK25/travdir-api",
                    apiUrl,
                },
            });
    });
    app.get("/api", (req: Request, res: Response): void => {
        res.status(200)
            .header(HEADER)
            .json({
                success: true,
                status: 200,
                message: "OK",
                resutls: {
                    destinations: `${apiUrl}destinations`,
                },
            });
    });
    app.get("*", (req: Request, res: Response): void => {
        res.status(404).header(HEADER).json({
            success: false,
            status: 404,
            message: `Invalid URL: ${req.originalUrl}`,
        });
    });
};
