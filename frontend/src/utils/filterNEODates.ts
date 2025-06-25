import { format } from "date-fns";

export const filterNEODatesInRange = (
  neoData: Record<string, any>,
  startDate: Date,
  endDate: Date
): Record<string, any> => {
  const start = format(startDate, "yyyy-MM-dd");
  const end = format(endDate, "yyyy-MM-dd");

  const filtered = Object.entries(neoData).filter(([date]) => {
    return date >= start && date <= end;
  });

  return Object.fromEntries(
    filtered.sort(([a], [b]) => a.localeCompare(b))
  );
};
