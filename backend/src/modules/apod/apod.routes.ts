import { Router } from "express";
import { getApod } from "./apod.controller";

const router = Router();

/**
 * @route GET /api/apod
 * @desc Fetch Astronomy Picture of the Day (APOD) from NASA.
 * @queryParam date (optional) - A specific date in YYYY-MM-DD format.
 *                               If omitted, APOD for today's date is returned.
 * @returns 200 - APOD data JSON
 * @returns 500 - Internal server error if fetching APOD fails
 */
router.get("/", getApod);

export default router;
