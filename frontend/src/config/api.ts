/**
 * Centralized API configuration.
 *
 * This module defines all base URLs for your backend API endpoints.
 * The base URL is loaded from environment variables (API_URL)
 * so it can change based on environment (local, staging, production)
 * without code changes.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Endpoints for the backend APIs.
 * Modify or extend as needed.
 */
export const APOD_API = `${API_BASE_URL}/api/apod`;
export const NEO_API = `${API_BASE_URL}/api/neo`;
