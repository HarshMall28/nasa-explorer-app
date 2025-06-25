import { Request, Response, NextFunction } from "express";
import { fetchApod } from "./apod.service";

/**
 * Controller to handle APOD fetch requests.
 *
 * Expects optional query param: ?date=YYYY-MM-DD
 * If date is provided, fetches APOD for that date.
 * If date is omitted, fetches APOD for today.
 */
export const getApod = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { date } = req.query;

    // Fetch APOD data from service
    const apod = await fetchApod(date as string | undefined);

    // Respond with data
    res.status(200).json(apod);
  } catch (error) {
    // Pass error to centralized error handler
    next(error);
  }
};
