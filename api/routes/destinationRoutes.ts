import { Express } from 'express';
import { createDestination, deleteDestination, getAllDestinations, getDestination, updateDestination } from "../controllers/destinationController";

export const destinationRoutes = (app: Express) => {
    app.route("/api/destinations")
        .get(getAllDestinations)
        .post(createDestination);
    app.route("/api/destination/:destinationSlug")
        .get(getDestination)
        .patch(updateDestination)
        .delete(deleteDestination);
};
