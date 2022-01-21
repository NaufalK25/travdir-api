const mongoose = require("mongoose");

const { DestinationModel } = require("../models/destinationModel");
const { strToSlug } = require("../helpers/createHelper");
const { baseUrl, HEADER } = require("../configs/constants");

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
                        detail_url: `${baseUrl}destination/${destination.slug}`,
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

const getDestination = async (req, res) => {
    const destination = await DestinationModel.findOne({
        slug: req.params.destinationSlug,
    });

    let success = true,
        status = 200,
        message = "OK";
    if (!destination) {
        [success, status, message] = [
            false,
            404,
            `Destination with slug ${req.params.destinationSlug} not found`,
        ];
    }

    const response = {
        success,
        status,
        message,
    };

    if (success) {
        response.results = {
            destination: {
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
            },
        };
    }

    res.status(status).header(HEADER).json(response);
};

const updateDestination = async (req, res) => {
    const destination = await DestinationModel.findOne({
        slug: req.params.destinationSlug,
    });

    let success = true,
        status = 200,
        message = "Destination successfully updated!";
    if (!destination) {
        [success, status, message] = [
            false,
            404,
            `Destination with slug ${req.params.destinationSlug} not found`,
        ];
    }

    const response = {
        success,
        status,
        message,
    };

    if (success) {
        destination.name = req.body.name;
        destination.slug = strToSlug(req.body.name);
        destination.description = req.body.description;
        destination.image = req.body.image;
        destination.location = req.body.location;
        destination.updatedAt = new Date();
        destination.save();

        response.results = {
            destination: {
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
                updatedAt: destination.updatedAt,
            },
        };
    }

    res.status(status).header(HEADER).json(response);
};

const deleteDestination = async (req, res) => {
    const destination = await DestinationModel.findOne({
        slug: req.params.destinationSlug,
    });

    let success = true,
        status = 200,
        message = "Destination successfully deleted!";
    if (!destination) {
        [success, status, message] = [
            false,
            404,
            `Destination with slug ${req.params.destinationSlug} not found`,
        ];
    }

    if (success) {
        destination.deleteOne({ slug: req.params.destinationSlug });
    }

    res.status(status).header(HEADER).json({ success, status, message });
};

module.exports = {
    getAllDestinations,
    createDestination,
    getDestination,
    updateDestination,
    deleteDestination,
};
