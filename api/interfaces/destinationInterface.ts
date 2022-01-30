import { ObjectId } from 'mongodb';

export interface ICoordinates {
    _id: ObjectId;
    latitude: number;
    longitude: number;
}

export interface ILocation {
    _id: ObjectId;
    coordinates: ICoordinates;
    address: string;
    city: string;
    province: string;
    postalCode: string;
}

export interface IDestination {
    _id: ObjectId;
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
