import { useState, useEffect } from "react";
import { DateRange, type RangeKeyDict } from "react-date-range";
import { differenceInDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Props for the NEODateCarousel component
interface NEODateCarouselProps {
  onRangeSelect: (startDate: Date, endDate: Date) => void;
  startDate: Date | null;
  endDate: Date | null;
}

/**
 * NEODateCarousel
 * Renders a date range picker allowing users to select a date window (max 7 days).
 * Handles validation and notifies parent on selection.
 */
export const NEODateCarousel = ({
  onRangeSelect,
  startDate,
  endDate,
}: NEODateCarouselProps) => {
  // Local state for the date picker selection
  const [selectionRange, setSelectionRange] = useState<
    {
      startDate: Date | undefined;
      endDate: Date | undefined;
      key: string;
    }[]
  >([
    {
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
      key: "selection",
    },
  ]);

  /**
   * Sync local state with parent-provided startDate / endDate.
   * Ensures the picker reflects external updates (e.g. default range).
   */
  useEffect(() => {
    setSelectionRange([
      {
        startDate: startDate ?? undefined,
        endDate: endDate ?? undefined,
        key: "selection",
      },
    ]);
  }, [startDate, endDate]);

  /**
   * Handles date range selection changes from the picker.
   * Validates that the range does not exceed 7 days.
   * Calls the parent onRangeSelect if valid.
   */
  const handleChange = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection;

    if (!startDate || !endDate) return;

    const diff = differenceInDays(endDate, startDate);
    if (diff > 6) {
      alert("⚠️ Please select a range of 7 days or fewer.");
      return;
    }

    setSelectionRange([{ startDate, endDate, key: "selection" }]);
    onRangeSelect(startDate, endDate);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/5 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-md">
      <h2 className="text-center text-purple-300 text-lg font-semibold mb-4">
        Select a Date Range (Max 7 Days)
      </h2>
      <DateRange
        ranges={selectionRange}
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        rangeColors={["#8b5cf6"]}
        editableDateInputs
        maxDate={new Date()}
        className="rounded-lg"
      />
    </div>
  );
};
