import express, { Application } from "express";
import cors from "cors";
import apodRoutes from "./modules/apod/apod.routes";
import neoRoutes from "./modules/neo/neo.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app: Application = express();

/**
 * Apply security and common middlewares
 */

// Enable CORS with default settings (allow all origins)
// ⚠️ In production, replace with specific origins for security
app.use(
  cors({
    origin: [
      "https://nasa-explorer-nine.vercel.app",
      "http://localhost:5173",
    ],
  })
);

// Parse incoming JSON payloads
app.use(express.json());

/**
 * Register application routes
 */
app.use("/api/apod", apodRoutes);
app.use("/api/neo", neoRoutes);

/**
 * Register centralized error handling middleware
 * This must come *after* all other routes and middlewares
 */
app.use(errorHandler);

export default app;
