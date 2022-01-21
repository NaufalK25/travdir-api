const touristDestination = require("../controllers/touristDestinationController");

const touristDestinationRoutes = (app) => {
    app.route("/api/destinations")
        .get(touristDestination.getAllDestinations)
        .post(touristDestination.createDestination);
    // app.route("/api/destination/:destinationId")
    //     .get(touristDestination.getDestination)
    //     .put(touristDestination.updateDestination)
    //     .delete(touristDestination.deleteDestination);
};

module.exports = {
    touristDestinationRoutes,
};
