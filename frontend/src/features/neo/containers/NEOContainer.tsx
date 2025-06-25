import { useEffect, useState, useMemo } from "react";
import { fetchNEOData } from "../services/neows.service";
import type { NEOApiResponse } from "../types/neows.types";
import { format, isBefore } from "date-fns";
import { NEODateCarousel } from "../components/NEODateCarousel";
import { NEO3DSpace } from "../components/NEO3DSpace";

export const NEOContainer = () => {
  // State for selected date range
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [data, setData] = useState<NEOApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Set default date range (last 7 days)
   */
  useEffect(() => {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 6);
    setStartDate(sevenDaysAgo);
    setEndDate(today);
  }, []);

  /**
   * Fetch NEO data when date range changes
   */
  useEffect(() => {
    if (!startDate || !endDate) return;

    // Ensure proper order of dates
    const first = isBefore(startDate, endDate) ? startDate : endDate;
    const second = isBefore(startDate, endDate) ? endDate : startDate;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchNEOData(
          format(first, "yyyy-MM-dd"),
          format(second, "yyyy-MM-dd")
        );
        setData(response);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError("Failed to fetch NEO data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  /**
   * Prepare asteroid data for 3D visualization
   * Assigns random positions and scaled sizes
   */
  const asteroidData = useMemo(() => {
    if (!data) return [];
    return Object.values(data.near_earth_objects)
      .flat()
      .map((neo) => ({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
        z: Math.random() * 10 - 5,
        size:
          (neo.estimated_diameter.kilometers.estimated_diameter_max ||
            0.1) / 5,
        isHazardous: neo.is_potentially_hazardous_asteroid,
        name: neo.name,
      }));
  }, [data]);

  return (
    <div className="w-full">
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-8 md:py-12 bg-gradient-to-r from-purple-800/60 to-black backdrop-blur-md">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Explore Near-Earth Objects
          </h1>
          <p className="text-purple-200">
            Visualize asteroids near our planet using NASA’s real-time
            data. Select a date range (up to 7 days) to begin.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <NEODateCarousel
            startDate={startDate}
            endDate={endDate}
            onRangeSelect={(start, end) => {
              setStartDate(start);
              setEndDate(end);
            }}
          />
        </div>
      </section>

      {loading && (
        <p className="text-purple-200 text-center mt-6">
          Loading NEO data...
        </p>
      )}
      {error && (
        <p className="text-red-500 text-center mt-6">{error}</p>
      )}

      <div className="w-full min-h-[60vh] mt-6">
        {!loading && !error && asteroidData.length > 0 && (
          <div className="w-full h-[60vh] md:h-[70vh]">
            <NEO3DSpace neoData={asteroidData} />
          </div>
        )}
      </div>
    </div>
  );
};
