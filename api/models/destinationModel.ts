import mongoose from 'mongoose';
import validator from 'validator';

const LocationSchema: mongoose.Schema = new mongoose.Schema({
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
});

const DestinationSchema: mongoose.Schema = new mongoose.Schema({
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
            validator: (image_url: string): boolean => {
                return validator.isURL(image_url);
            },
            message: "Invalid image URL!",
        },
        unique: true,
    },
    location: LocationSchema,
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

DestinationSchema.pre('save', function (next): void {
    this.updatedAt = Date.now();
    next();
});

export const DestinationModel: any = mongoose.model(
    "Destination",
    DestinationSchema
);
