import { Request, Response } from "express";

import { DestinationModel } from "../models/destinationModel";
import { strToSlug } from '../helpers/createHelper';
import { baseUrl, HEADER } from '../configs/constants';

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

export const createDestination = (req: Request, res: Response): void => {
    const newDestination: any = new DestinationModel({
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

export const getDestination = async (req: Request, res: Response): Promise<void> => {
    const destination: any = await DestinationModel.findOne({
        slug: req.params.destinationSlug,
    });

    let success: boolean = true,
        status: number = 200,
        message: string = "OK";
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
        results: undefined
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

export const updateDestination = async (req: Request, res: Response): Promise<void> => {
    const destination: any = await DestinationModel.findOne({
        slug: req.params.destinationSlug,
    });

    let success: boolean = true,
        status: number = 200,
        message: string = "Destination successfully updated!";
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
        results: undefined
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

export const deleteDestination = async (req: Request, res: Response): Promise<void> => {
    const destination: any = await DestinationModel.findOne({
        slug: req.params.destinationSlug,
    });

    let success: boolean = true,
        status: number = 200,
        message: string = "Destination successfully deleted!";
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
