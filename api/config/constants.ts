export const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8080}`;

export const apiUrl = `${baseUrl}/api/`;

export const imageUrl = `${baseUrl}/uploads/`;

export const HEADER: { "Content-Type": string, "Access-Control-Allow-Origin": string, "Access-Control-Allow-Methods": string } = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, HEAD, OPTIONS",
};
