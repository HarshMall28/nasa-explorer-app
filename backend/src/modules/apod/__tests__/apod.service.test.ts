import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchApod } from "../apod.service";
import { NASA_APOD_URL } from "../../../constants/urls";
import { NASA_API_KEY } from "../../../config/env";

const mockAxios = new MockAdapter(axios);

describe("APOD Service", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch APOD data for a given date", async () => {
    const mockData = {
      date: "2025-01-01",
      title: "Test APOD",
      explanation: "Test explanation",
      media_type: "image",
      url: "http://example.com",
      service_version: "v1",
    };

    mockAxios
      .onGet(NASA_APOD_URL, {
        params: { api_key: NASA_API_KEY, date: "2025-01-01" },
      })
      .reply(200, mockData);

    const result = await fetchApod("2025-01-01");
    expect(result).toEqual(mockData);
  });
});
