import type { ApodData } from "../types/apod.types";
/**
 * Fetches the APOD for a given date.
 * @param date The date (YYYY-MM-DD) to fetch the APOD for.
 * @returns APOD data for that date.
 */
export declare const fetchApodByDate: (date: string) => Promise<ApodData>;
