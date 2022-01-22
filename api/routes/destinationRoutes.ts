import { Application } from 'express';

import { getAllDestinations, createDestination, getDestination, updateDestination, deleteDestination } from "../controllers/destinationController";

export const destinationRoutes = (app: Application) => {
    app.route("/api/destinations")
        .get(getAllDestinations)
        .post(createDestination);
    app.route("/api/destination/:destinationSlug")
        .get(getDestination)
        .put(updateDestination)
        .delete(deleteDestination);
};