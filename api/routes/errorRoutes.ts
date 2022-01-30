import { Request, Response } from 'express';
import { HEADER } from "../config/constants";

export const err404Route = (req: Request, res: Response): void => {
    res.status(404)
        .header(HEADER)
        .json({
            success: false,
            status: 404,
            message: `Invalid endpoint: ${req.originalUrl}!`,
        });
};

export const err405Route = (req: Request, res: Response): void => {
    res.status(405)
        .header(HEADER)
        .json({
            success: false,
            status: 405,
            message: `Method ${req.method} is not allowed on endpoint: ${req.originalUrl}!`,
        })
};

export const err500Route = (req: Request, res: Response): void => {
    res.status(500)
        .header(HEADER)
        .json({
            success: false,
            status: 500,
            message: "Internal server error!",
        });
};
