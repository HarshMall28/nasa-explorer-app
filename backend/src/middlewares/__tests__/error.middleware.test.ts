import request from "supertest";
import express from "express";
import { errorHandler } from "../error.middleware";

const app = express();

// Routes upfront
app.get("/error", (req, res, next) => {
  next(new Error("Test error"));
});

app.get("/error-no-msg", (req, res, next) => {
  next(new Error()); // Real Error object, no message
});

app.use(errorHandler);

describe("Error middleware", () => {
  it("should log and return error response", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation();

    const res = await request(app).get("/error");

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("error", "Test error");
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("❌ [GET] /error -> Test error")
    );

    consoleErrorSpy.mockRestore();
  });
});
