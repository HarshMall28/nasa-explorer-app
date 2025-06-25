import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchNEOData } from "../neo.service";
import { NASA_NEO_URL } from "../../../constants/urls";
import { NASA_API_KEY } from "../../../config/env";

const mockAxios = new MockAdapter(axios);

describe("NEO Service", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch NEO data for valid start and end dates", async () => {
    const mockData = {
      element_count: 5,
      near_earth_objects: {},
    };

    mockAxios
      .onGet(NASA_NEO_URL, {
        params: {
          api_key: NASA_API_KEY,
          start_date: "2025-06-01",
          end_date: "2025-06-02",
        },
      })
      .reply(200, mockData);

    const result = await fetchNEOData("2025-06-01", "2025-06-02");
    expect(result).toEqual(mockData);
  });

  it("should throw if NASA API fails", async () => {
    mockAxios.onGet(NASA_NEO_URL).reply(500);

    await expect(
      fetchNEOData("2025-06-01", "2025-06-02")
    ).rejects.toThrow("Request failed with status code 500");
  });
});
