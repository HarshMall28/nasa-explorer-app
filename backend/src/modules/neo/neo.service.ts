import axios from "axios";
import { NEOApiResponse } from "./neo.types";
import { NASA_API_KEY } from "../../config/env";
import { NASA_NEO_URL } from "../../constants/urls";

/**
 * Fetches Near-Earth Object (NEO) data from NASA's API for a given date range.
 *
 * @param start_date - Start date of the range in YYYY-MM-DD format.
 * @param end_date - End date of the range in YYYY-MM-DD format.
 * @returns A Promise resolving to the NEO API response object.
 *
 * Notes:
 * - This function does not handle errors internally. It is expected that the
 *   caller (controller) will handle errors using try/catch and appropriate response logic.
 */
export const fetchNEOData = async (
  start_date: string,
  end_date: string
): Promise<NEOApiResponse> => {
  const params: Record<string, string> = {
    api_key: NASA_API_KEY,
    start_date,
    end_date,
  };

  // Perform the API request to NASA's NEO Feed endpoint
  const { data } = await axios.get<NEOApiResponse>(NASA_NEO_URL, {
    params,
  });

  return data;
};
