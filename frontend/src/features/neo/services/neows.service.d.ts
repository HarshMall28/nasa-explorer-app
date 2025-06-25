import type { NEOApiResponse } from "../types/neows.types";
/**
 * fetchNEOData
 * Fetches Near-Earth Object (NEO) data for a given date range from your backend API.
 *
 * @param startDate - The start date in YYYY-MM-DD format
 * @param endDate - The end date in YYYY-MM-DD format
 * @returns A promise resolving to the NEO API response data
 */
export declare const fetchNEOData: (startDate: string, endDate: string) => Promise<NEOApiResponse>;
