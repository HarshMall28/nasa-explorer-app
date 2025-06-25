import { Router } from "express";
import { getNEOs } from "./neo.controller";

const router = Router();

/**
 * @route GET /api/neo
 * @desc Fetch Near-Earth Object (NEO) data from NASA API for a specified date range.
 * @queryParam start_date (optional) - Start date in YYYY-MM-DD format. Defaults to today if omitted.
 * @queryParam end_date (optional) - End date in YYYY-MM-DD format. Defaults to today if omitted.
 * @returns 200 - Returns NEO data JSON from NASA API
 * @returns 500 - Returns internal server error if fetching fails
 */
router.get("/", getNEOs);

export default router;
