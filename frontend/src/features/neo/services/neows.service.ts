import axios from "axios";
import type { NEOApiResponse } from "../types/neows.types";
import { NEO_API } from "../../../config/api";

/**
 * fetchNEOData
 * Fetches Near-Earth Object (NEO) data for a given date range from your backend API.
 *
 * @param startDate - The start date in YYYY-MM-DD format
 * @param endDate - The end date in YYYY-MM-DD format
 * @returns A promise resolving to the NEO API response data
 */
export const fetchNEOData = async (
  startDate: string,
  endDate: string
): Promise<NEOApiResponse> => {
  const response = await axios.get<NEOApiResponse>(NEO_API, {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  });

  return response.data;
};
