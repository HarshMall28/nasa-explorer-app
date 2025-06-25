import app from "./app";

/**
 * Start the Express server.
 * Binds to the configured PORT and logs the server URL.
 * Handles startup errors gracefully.
 */
const PORT = process.env.PORT || 5150;
app
  .listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  })
  .on("error", (err: NodeJS.ErrnoException) => {
    console.error(
      `Failed to start server on port ${PORT}:`,
      err.message
    );
    process.exit(1); // Exit with failure
  });
