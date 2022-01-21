const mongoose = require("mongoose");
const validator = require("validator");

const LocationSchema = new mongoose.Schema({
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

const TouristDestinationSchema = new mongoose.Schema({
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
            validator: (image_url) => {
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

TouristDestinationSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const TouristDestinationModel = mongoose.model(
    "TouristDestination",
    TouristDestinationSchema
);

module.exports = {
    TouristDestinationModel,
};
