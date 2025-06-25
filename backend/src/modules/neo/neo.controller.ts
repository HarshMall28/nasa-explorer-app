import { Request, Response, NextFunction } from "express";
import { fetchNEOData } from "./neo.service";

/**
 * Generates today's date in local timezone as YYYY-MM-DD.
 * Ensures no UTC/local mismatch.
 */
const getLocalDateString = (): string => {
  const today = new Date();
  return `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
};

/**
 * Controller to fetch NASA Near-Earth Object (NEO) data.
 *
 * Accepts:
 * - start_date (optional, YYYY-MM-DD)
 * - end_date (optional, YYYY-MM-DD)
 *
 * If either is missing, defaults to today for that date.
 *
 * Responses:
 * - 200: NEO data JSON
 * - 500: Internal server error on failure
 */
export const getNEOs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { start_date, end_date } = req.query;

  const todayLocal = getLocalDateString();

  const startDate =
    typeof start_date === "string" && start_date.trim()
      ? start_date
      : todayLocal;

  const endDate =
    typeof end_date === "string" && end_date.trim()
      ? end_date
      : todayLocal;

  try {
    const data = await fetchNEOData(startDate, endDate);
    res.status(200).json(data);
  } catch (err) {
    console.error(`❌ Error fetching NEO data:`, err);
    next(err);
  }
};
