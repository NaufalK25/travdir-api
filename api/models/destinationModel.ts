import { model, Schema } from 'mongoose';
import validator from 'validator';

const coordinateSchema: Schema = new Schema({
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

const locationSchema: Schema = new Schema({
    coordinates: coordinateSchema,
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
            message: 'Invalid postal code!'
        }
    }
});

const destinationSchema: Schema = new Schema({
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
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    types: {
        type: [String],
        required: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

destinationSchema.pre('save', function (next): void {
    this.updatedAt = Date.now();
    next();
});

export const DestinationModel: any = model(
    "Destination",
    destinationSchema
);
