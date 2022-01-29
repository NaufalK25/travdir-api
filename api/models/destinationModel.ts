import { model, Schema } from 'mongoose';
import validator from 'validator';
import { ICoordinates, IDestination, ILocation } from '../interfaces/destinationInterface';

const coordinatesSchema = new Schema<ICoordinates>({
    latitude: {
        type: Number,
        required: false,
        validate: {
            validator: (latitude: number): boolean => {
                return validator.isFloat(latitude.toString(), {
                    min: -90,
                    max: 90,
                });
            },
            message: 'Invalid latitude value!',
        },
    },
    longitude: {
        type: Number,
        required: false,
        validate: {
            validator: (longitude: number): boolean => {
                return validator.isFloat(longitude.toString(), {
                    min: -180,
                    max: 180,
                });
            },
            message: 'Invalid longitude value!',
        },
    },
});

const locationSchema = new Schema<ILocation>({
    coordinates: coordinatesSchema,
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: false,
        validate: {
            validator: (postalCode: string): boolean => {
                return /^[1-9]\d{4}$/.test(postalCode);
            },
            message: 'Invalid postal code!',
        }
    }
});

const destinationSchema = new Schema<IDestination>({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: (image: string): boolean => {
                return /^[a-z0-9-]+\.(jpg|jpeg|png)$/.test(image);
            },
            message: "Invalid image extension!",
        },
        unique: true,
    },
    buildYear: {
        type: Number,
        required: false,
        validate: {
            validator: (buildYear: number): boolean => {
                return buildYear >= 0;
            },
            message: "Invalid build year!",
        },
    },
    location: locationSchema,
    types: {
        type: [String],
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export const DestinationModel = model<IDestination>("Destination", destinationSchema);
