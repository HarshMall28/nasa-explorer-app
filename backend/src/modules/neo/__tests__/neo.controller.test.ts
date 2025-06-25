import request from "supertest";
import express from "express";
import neoRoutes from "../neo.routes";
import * as neoService from "../neo.service";
import { errorHandler } from "../../../middlewares/error.middleware";

const app = express();
app.use(express.json());
app.use("/api/neo", neoRoutes);
app.use(errorHandler); // centralized error handler

describe("NEO Controller", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return 200 and NEO data for valid dates", async () => {
    const mockData = { element_count: 42, near_earth_objects: {} };
    jest
      .spyOn(neoService, "fetchNEOData")
      .mockResolvedValue(mockData);

    const res = await request(app).get(
      "/api/neo?start_date=2025-06-01&end_date=2025-06-02"
    );

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  it("should return 200 and NEO data when no dates provided (defaults applied)", async () => {
    const mockData = { element_count: 21, near_earth_objects: {} };
    jest
      .spyOn(neoService, "fetchNEOData")
      .mockResolvedValue(mockData);

    const res = await request(app).get("/api/neo");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  it("should return 500 if service throws an error", async () => {
    jest
      .spyOn(neoService, "fetchNEOData")
      .mockRejectedValue(new Error("NASA API failed"));

    const res = await request(app).get(
      "/api/neo?start_date=2025-06-01&end_date=2025-06-02"
    );

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("error", "NASA API failed");
  });
});
