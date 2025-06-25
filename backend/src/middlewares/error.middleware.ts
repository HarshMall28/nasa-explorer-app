import { Request, Response, NextFunction } from "express";

/**
 * Centralized error handling middleware for Express.
 * Catches any errors passed via next(error) and sends consistent JSON response.
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction // unused but required for Express error middleware signature
): void => {
  // Log error details
  console.error(
    `❌ [${req.method}] ${req.originalUrl} -> ${err.message}`
  );

  // Build response
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  // You could optionally add more meta info here (timestamp, requestId, etc.)
  res.status(statusCode).json({
    error: message,
  });
};
