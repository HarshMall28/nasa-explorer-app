import axios from "axios";
import type { ApodData } from "../types/apod.types";
import { APOD_API } from "../../../config/api";

/**
 * Fetches the APOD for a given date.
 * @param date The date (YYYY-MM-DD) to fetch the APOD for.
 * @returns APOD data for that date.
 */
export const fetchApodByDate = async (
  date: string
): Promise<ApodData> => {
  const response = await axios.get<ApodData>(APOD_API, {
    params: { date },
  });
  return response.data;
};
