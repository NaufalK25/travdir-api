import { model, Schema } from 'mongoose';
import { ICoordinates, IDestination, ILocation } from '../interfaces/destinationInterface';

const coordinatesSchema = new Schema<ICoordinates>({
    latitude: {
        type: Number,
        required: false,
        min: -90,
        max: 90,
    },
    longitude: {
        type: Number,
        required: false,
        min: -180,
        max: 180,
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
        match: /^[1-9]\d{4}$/,
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
        match: /^[a-z0-9-]+\.(jpg|jpeg|png)$/,
        unique: true,
    },
    buildYear: {
        type: Number,
        required: false,
        min: 1000,
        max: new Date().getFullYear(),
    },
    location: {
        type: locationSchema,
        required: true,
    },
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
