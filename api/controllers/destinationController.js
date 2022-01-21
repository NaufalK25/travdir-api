const mongoose = require("mongoose");

const { DestinationModel } = require("../models/destinationModel");
const { strToSlug } = require("../utils/createHelper");
const { HEADER } = require("../utils/constants");

const getAllDestinations = async (req, res) => {
    const allDestinations = await DestinationModel.find();
    res.status(200)
        .header(HEADER)
        .json({
            success: true,
            status: 200,
            message: "OK",
            results: {
                count: allDestinations.length,
                destinations: allDestinations.map((destination) => {
                    return {
                        _id: destination._id,
                        name: destination.name,
                        slug: destination.slug,
                        description: destination.description,
                        image: destination.image,
                        location: {
                            _id: destination.location._id,
                            address: destination.location.address,
                            city: destination.location.city,
                            province: destination.location.province,
                        },
                    };
                }),
            },
        });
};

const createDestination = (req, res) => {
    const newDestination = new DestinationModel({
        name: req.body.name,
        slug: strToSlug(req.body.name),
        description: req.body.description,
        image: req.body.image,
        location: req.body.location,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    newDestination.save();
    res.status(201)
        .header(HEADER)
        .json({
            success: true,
            status: 201,
            message: "Created",
            results: {
                destination: {
                    _id: newDestination._id,
                    name: newDestination.name,
                    slug: newDestination.slug,
                    description: newDestination.description,
                    image: newDestination.image,
                    location: {
                        _id: newDestination.location._id,
                        address: newDestination.location.address,
                        city: newDestination.location.city,
                        province: newDestination.location.province,
                    },
                    createdAt: newDestination.createdAt,
                    updatedAt: newDestination.updatedAt,
                },
            },
        });
};

module.exports = {
    getAllDestinations,
    createDestination,
};
