import "swiper/css";
import "swiper/css/navigation";
import type { DateCarouselProps } from "../types/dateCarousel.types";
interface Props extends DateCarouselProps {
    disablePrev?: boolean;
}
/**
 * DateCarousel component — renders a swipeable list of dates with navigation buttons.
 * Allows selecting a date and navigating through date slides.
 */
declare const DateCarousel: ({ dates, selectedDate, onSelect, onPrevious, onNext, disableNext, disablePrev, }: Props) => import("react/jsx-runtime").JSX.Element;
export default DateCarousel;
