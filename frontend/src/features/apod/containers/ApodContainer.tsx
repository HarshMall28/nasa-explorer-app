import { useEffect, useState } from "react";
import { fetchApodByDate } from "../services/apodService";
import ApodCard from "../components/apodCard/ApodCard";
import ApodSkeleton from "../components/ApodSkeleton";
import DateCarousel from "../components/DateCarousel";
import type { ApodData } from "../types/apod.types";

const ApodContainer = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [dates, setDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [data, setData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [navDisabled, setNavDisabled] = useState<boolean>(false);

  useEffect(() => {
    const initialDates = [];
    for (let i = 2; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      initialDates.push(date);
    }
    setDates(initialDates);
    setSelectedDate(today);
  }, []);

  /**
   * Formats a Date as YYYY-MM-DD in local time (no UTC shift)
   */
  const formatLocalIsoDate = (date: Date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date
      .getDate()
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!selectedDate) return;

    const getData = async () => {
      try {
        setLoading(true);
        setError("");
        const isoDate = formatLocalIsoDate(selectedDate);
        const response = await fetchApodByDate(isoDate);
        setData(response);
      } catch (err: any) {
        console.error("APOD fetch error:", err);

        if (err?.response?.status === 429) {
          setError("⚠️ Too many requests. Please slow down.");
        } else {
          setError("❌ Failed to fetch APOD data. Please try again.");
        }
      } finally {
        setLoading(false);
        setNavDisabled(false);
      }
    };

    getData();
  }, [selectedDate]);

  const handlePrevious = () => {
    if (navDisabled) return;
    setNavDisabled(true);

    const newDate = new Date(dates[0]);
    newDate.setDate(dates[0].getDate() - 1);
    const newDates = [
      newDate,
      new Date(newDate.getTime() + 86400000),
      new Date(newDate.getTime() + 172800000),
    ];
    setDates(newDates);
    setSelectedDate(newDate);
  };

  const handleNext = () => {
    if (navDisabled) return;
    setNavDisabled(true);

    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);

    if (nextDate > today) return;

    if (
      !dates.some((d) => d.toDateString() === nextDate.toDateString())
    ) {
      const newDates = [
        new Date(nextDate.getTime() - 172800000),
        new Date(nextDate.getTime() - 86400000),
        nextDate,
      ];
      setDates(newDates);
    }
    setSelectedDate(nextDate);
  };

  const isNextDisabled = () => {
    return (
      selectedDate.toDateString() === today.toDateString() ||
      navDisabled
    );
  };

  return (
    <div className="space-y-6 px-2 sm:px-4 -mx-2 md:mx-0">
      <DateCarousel
        dates={dates}
        selectedDate={selectedDate}
        onSelect={(date) => {
          if (!navDisabled) {
            setNavDisabled(true);
            setSelectedDate(date);
          }
        }}
        onPrevious={handlePrevious}
        onNext={handleNext}
        disableNext={isNextDisabled()}
        disablePrev={navDisabled}
      />

      {loading && <ApodSkeleton />}
      {error && <p className="text-red-400 text-center">{error}</p>}
      {data && !loading && <ApodCard data={data} />}
    </div>
  );
};

export default ApodContainer;
