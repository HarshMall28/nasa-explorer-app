import request from "supertest";
import express from "express";
import apodRoutes from "../apod.routes";
import * as apodService from "../apod.service";
import { errorHandler } from "../../../middlewares/error.middleware";
import type { ApodResponse } from "../apod.types";
const app = express();
app.use(express.json());
app.use("/api/apod", apodRoutes);
app.use(errorHandler); // central error handler

describe("APOD Controller", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return 200 and APOD data for valid date", async () => {
    const mockData: ApodResponse = {
      date: "2025-01-01",
      title: "Test APOD",
      explanation: "Test explanation",
      media_type: "image",
      url: "http://example.com/image.jpg",
      service_version: "v1",
    };

    jest.spyOn(apodService, "fetchApod").mockResolvedValue(mockData);

    const res = await request(app).get("/api/apod?date=2025-01-01");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  it("should return 200 and APOD data for no date (today)", async () => {
    const mockData: ApodResponse = {
      date: "2025-01-02",
      title: "Today APOD",
      explanation: "Test today explanation",
      media_type: "image",
      url: "http://example.com/today.jpg",
      service_version: "v1",
    };

    jest.spyOn(apodService, "fetchApod").mockResolvedValue(mockData);

    const res = await request(app).get("/api/apod");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  it("should return 500 if fetchApod throws error", async () => {
    jest
      .spyOn(apodService, "fetchApod")
      .mockRejectedValue(new Error("NASA API failed"));

    const res = await request(app).get("/api/apod?date=2025-01-01");

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("error", "NASA API failed");
  });
});
