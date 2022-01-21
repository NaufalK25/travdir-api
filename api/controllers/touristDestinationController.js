const mongoose = require("mongoose");

const {
    TouristDestinationModel,
} = require("../models/touristDestinationModel");
const { strToSlug } = require("../utils/createHelper");
const { HEADER } = require("../utils/constants");

const getAllDestinations = async (req, res) => {
    const allPlaces = await TouristDestinationModel.find();
    res.status(200).header(HEADER).json({
        success: true,
        status: 200,
        message: "OK",
        results: allPlaces,
        count: allPlaces.length,
    });
};

const createDestination = (req, res) => {
    // const newDestination = new TouristDestinationModel({
    //     name: req.body.name,
    //     slug: strToSlug(req.body.name),
    //     description: req.body.description,
    //     image: req.body.image,
    //     location: req.body.location,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // });
    // await newDestination.save();
    res.status(201).header(HEADER).json({
        success: true,
        status: 201,
        message: "Created",
        results: req.body,
    });
};

module.exports = {
    getAllDestinations,
    createDestination,
};
