import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
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
export declare const NEODateCarousel: ({ onRangeSelect, startDate, endDate, }: NEODateCarouselProps) => import("react/jsx-runtime").JSX.Element;
export {};
