import { Request, Response, Express } from 'express';

import { baseUrl, HEADER } from '../configs/constants';

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
                    baseUrl,
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
                    destinations: `${baseUrl}destinations`,
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
