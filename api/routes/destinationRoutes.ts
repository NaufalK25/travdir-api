import { Express } from 'express';
import { createDestination, deleteDestination, getAllDestinations, getDestination, updateDestination } from "../controllers/destinationController";
import { err405Route } from "../routes/errorRoutes";

export const destinationRoutes = (app: Express) => {
    app.route("/api/destinations")
        .get(getAllDestinations)
        .post(createDestination)
        .all(err405Route);
    app.route("/api/destination/:destinationSlug")
        .get(getDestination)
        .patch(updateDestination)
        .delete(deleteDestination)
        .all(err405Route);
};
