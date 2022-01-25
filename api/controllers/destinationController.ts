import { Request, Response } from "express";
import { HEADER, imageUrl } from '../configs/constants';
import { createFolder, strToSlug } from '../helpers/createHelper';
import { DestinationModel } from "../models/destinationModel";


export const getAllDestinations = async (req: Request, res: Response): Promise<void> => {
    const allDestinations: any = await DestinationModel.find();
    res.status(200)
        .header(HEADER)
        .json({
            success: true,
            status: 200,
            message: "OK",
            results: {
                count: allDestinations.length,
                destinations: allDestinations.map((destination: any): object => {
                    return {
                        _id: destination._id,
                        name: destination.name,
                        slug: destination.slug,
                        description: destination.description,
                        image: `${imageUrl}destination/${destination.image}`,
                        buildYear: destination.buildYear,
                        location: {
                            _id: destination.location._id,
                            coordinates: {
                                _id: destination.location.coordinates?._id,
                                latitude: destination.location.coordinates?.latitude,
                                longitude: destination.location.coordinates?.longitude,
                            },
                            address: destination.location.address,
                            city: destination.location.city,
                            province: destination.location.province,
                            postalCode: destination.location.postalCode,
                        },
                        types: destination.types,
                    };
                }),
            },
        });
};

export const createDestination = (req: Request, res: Response): void => {
    createFolder('./public/uploads/destination');
    const newDestination: any = new DestinationModel({
        name: req.body.name,
        slug: strToSlug(req.body.name),
        description: req.body.description,
        image: req.body.image,
        buildYear: req.body.buildYear,
        location: req.body.location,
        types: req.body.types,
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
                    image: `${imageUrl}destination/${newDestination.image}`,
                    buildYear: newDestination.buildYear,
                    location: {
                        _id: newDestination.location._id,
                        coordinates: {
                            _id: newDestination.location.coordinates?._id,
                            latitude: newDestination.location.coordinates?.latitude,
                            longitude: newDestination.location.coordinates?.longitude,
                        },
                        address: newDestination.location.address,
                        city: newDestination.location.city,
                        province: newDestination.location.province,
                        postalCode: newDestination.location.postalCode,
                    },
                    types: newDestination.types,
                    createdAt: newDestination.createdAt,
                    updatedAt: newDestination.updatedAt,
                },
            },
        });
};

export const getDestination = async (req: Request, res: Response): Promise<void> => {
    const destination: any = await DestinationModel.findOne({
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

    const response: { success: boolean, status: number, message: string, results: object | undefined } = {
        success,
        status,
        message,
        results: undefined,
    };

    if (success) {
        response.results = {
            destination: {
                _id: destination._id,
                name: destination.name,
                slug: destination.slug,
                description: destination.description,
                image: `${imageUrl}destination/${destination.image}`,
                buildYear: destination.buildYear,
                location: {
                    _id: destination.location._id,
                    coordinates: {
                        _id: destination.location.coordinates?._id,
                        latitude: destination.location.coordinates?.latitude,
                        longitude: destination.location.coordinates?.longitude,
                    },
                    address: destination.location.address,
                    city: destination.location.city,
                    province: destination.location.province,
                    postalCode: destination.location.postalCode,
                },
                types: destination.types,
            },
        };
    }

    res.status(status).header(HEADER).json(response);
};

export const updateDestination = async (req: Request, res: Response): Promise<void> => {
    const destination: any = await DestinationModel.findOne({
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

    const response: { success: boolean, status: number, message: string, results: object | undefined } = {
        success,
        status,
        message,
        results: undefined,
    };

    if (success) {
        destination.name = req.body?.name || destination.name;
        destination.slug = strToSlug(req.body?.name) || destination.slug;
        destination.description = req.body?.description || destination.description;
        destination.image = req.body?.image || destination.image;
        destination.buildYear = req.body?.buildYear || destination.buildYear;
        destination.location = req.body?.location || destination.location;
        destination.types = req.body?.types || destination.types;
        destination.updatedAt = new Date();
        destination.save();

        response.results = {
            destination: {
                _id: destination._id,
                name: destination.name,
                slug: destination.slug,
                description: destination.description,
                image: `${imageUrl}destination/${destination.image}`,
                buildYear: destination.buildYear,
                location: {
                    _id: destination.location._id,
                    coordinates: {
                        _id: destination.location.coordinates?._id,
                        latitude: destination.location.coordinates?.latitude,
                        longitude: destination.location.coordinates?.longitude,
                    },
                    address: destination.location.address,
                    city: destination.location.city,
                    province: destination.location.province,
                    postalCode: destination.location.postalCode,
                },
                types: destination.types,
                updatedAt: destination.updatedAt,
            },
        };
    }

    res.status(status).header(HEADER).json(response);
};

export const deleteDestination = async (req: Request, res: Response): Promise<void> => {
    const destination: any = await DestinationModel.findOne({
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
