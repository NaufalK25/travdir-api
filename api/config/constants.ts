export const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;

export const apiUrl = `${baseUrl}/api/`;

export const imageUrl = `${baseUrl}/uploads/`;

export const HEADER = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, HEAD, OPTIONS",
};
