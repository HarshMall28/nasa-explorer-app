import axios from "axios";
import { ApodResponse } from "./apod.types";
import { NASA_API_KEY } from "../../config/env";
import { NASA_APOD_URL } from "../../constants/urls";

/**
 * Fetches the Astronomy Picture of the Day (APOD) from NASA's API.
 *
 * @param date - Optional. Specific date (YYYY-MM-DD) to fetch APOD for. If omitted, today's APOD is fetched.
 * @returns Promise resolving to APOD response object.
 */
export const fetchApod = async (
  date?: string
): Promise<ApodResponse> => {
  const params: Record<string, string> = {
    api_key: NASA_API_KEY,
    ...(date && { date }),
  };

  const { data } = await axios.get<ApodResponse>(NASA_APOD_URL, {
    params,
  });

  return data;
};
