const destination = require("../controllers/destinationController");

const destinationRoutes = (app) => {
    app.route("/api/destinations")
        .get(destination.getAllDestinations)
        .post(destination.createDestination);
    app.route("/api/destination/:destinationSlug")
        .get(destination.getDestination)
        .put(destination.updateDestination)
        .delete(destination.deleteDestination);
};

module.exports = {
    destinationRoutes,
};
