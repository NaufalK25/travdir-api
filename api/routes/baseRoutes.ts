import { Express } from 'express';
import { apiUrl, HEADER } from '../config/constants';
import { err404Route, err405Route, err500Route } from '../routes/errorRoutes';

export const baseRoutes = (app: Express) => {
    app.route("/")
        .get((req, res) => {
            res.status(200)
                .header(HEADER)
                .json({
                    success: true,
                    status: 200,
                    message: "OK",
                    results: {
                        greet: "Welcome to the TravDir API! 👋",
                        documentation: "https://github.com/NaufalK25/travdir-api",
                        baseUrl: apiUrl,
                    },
                });
        })
        .all(err405Route);
    app.route("/api")
        .get((Request, res) => {
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
        })
        .all(err405Route);
    app.all("*", err404Route);
    app.use(err500Route);
};
