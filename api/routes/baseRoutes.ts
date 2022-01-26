import { Express, Request, Response } from 'express';
import { apiUrl, HEADER } from '../configs/constants';
import { err404Route } from '../routes/errorRoutes';

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
    app.get("*", err404Route);
};
