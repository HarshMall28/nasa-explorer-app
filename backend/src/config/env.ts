import dotenv from "dotenv";

// Load environment variables from .env file into process.env
dotenv.config();

/**
 * Application configuration constants loaded from environment variables.
 * Defaults are provided where appropriate.
 */

// Server port
export const PORT: number = Number(process.env.PORT) || 5150;

// NASA API key (required — throws if not provided)
export const NASA_API_KEY: string = process.env.NASA_API_KEY || "";

if (!NASA_API_KEY) {
  console.warn("NASA_API_KEY is not set. API requests may fail.");
}

// (Optional) Base NASA API URL (if you want to centralize it)
export const NASA_BASE_URL: string =
  process.env.NASA_BASE_URL || "https://api.nasa.gov";
