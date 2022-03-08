import { Schema } from 'mongoose';

export interface ICoordinates {
    _id: Schema.Types.ObjectId;
    latitude: number;
    longitude: number;
}

export interface ILocation {
    _id: Schema.Types.ObjectId;
    coordinates: ICoordinates;
    address: string;
    city: string;
    province: string;
    postalCode: string;
}

export interface IDestination {
    _id: Schema.Types.ObjectId;
    name: string;
    slug: string;
    description: string;
    image: string;
    buildYear: number;
    location: ILocation;
    types: string[];
    createdAt: Date;
    updatedAt: Date;
}
