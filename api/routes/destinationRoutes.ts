import { Express } from 'express';
import multer from 'multer';
import path from 'path';
import { createDestination, deleteDestination, getAllDestinations, getDestination, updateDestination } from "../controllers/destinationController";
import { randomString } from "../helpers/apiHelper";
import { err405Route } from "../routes/errorRoutes";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/destinations/');
    },
    filename: (req, file, cb) => {
        cb(null, `${randomString(16)}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

export const destinationRoutes = (app: Express) => {
    app.route("/api/destinations")
        .get(getAllDestinations)
        .post(multer({ storage }).single('image'), createDestination)
        .all(err405Route);
    app.route("/api/destination/:destinationSlug")
        .get(getDestination)
        .patch(multer({ storage }).single('image'), updateDestination)
        .delete(deleteDestination)
        .all(err405Route);
};
