import dotenv from 'dotenv';
dotenv.config();

export const baseUrl: string = `http://localhost:${process.env.port || 3000}/api/`;

export const HEADER: { 'Content-Type': string, 'Access-Control-Allow-Origin': string, 'Access-Control-Allow-Methods': string } = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
};
