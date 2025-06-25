import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
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
const DateCarousel = ({
  dates,
  selectedDate,
  onSelect,
  onPrevious,
  onNext,
  disableNext,
  disablePrev,
}: Props) => {
  /**
   * Formats a date as "Mon DD"
   */
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    return `${month} ${day}`;
  };

  /**
   * Checks if a date is the selected date
   */
  const isSelected = (date: Date): boolean => {
    return date.toDateString() === selectedDate.toDateString();
  };

  /**
   * Determines initial slide index based on selected date
   */
  const getInitialSlide = (): number => {
    const index = dates.findIndex((d) => isSelected(d));
    return index >= 0 ? index : Math.floor(dates.length / 2);
  };

  /**
   * Handles slide change by updating the selected date
   */
  const handleSlideChange = (swiper: SwiperType) => {
    const newDate = dates[swiper.activeIndex];
    if (newDate) {
      onSelect(newDate);
    }
  };

  /**
   * Renders a navigation button (previous/next)
   */
  const renderNavButton = (
    isPrev: boolean,
    onClick: () => void,
    disabled: boolean
  ) => {
    const iconPath = isPrev ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`p-1.5 sm:p-2 rounded-full transition-colors flex-shrink-0 ${
          disabled
            ? "bg-gray-500 cursor-not-allowed opacity-50"
            : "bg-blue-900 hover:bg-blue-800 text-white"
        }`}
        aria-label={isPrev ? "Previous date" : "Next date"}
      >
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPath}
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 w-full px-2 sm:px-4">
      {renderNavButton(true, onPrevious, !!disablePrev)}

      <div className="w-[180px] sm:w-[210px] flex-shrink-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={4}
          slidesPerView={3}
          centeredSlides={false}
          initialSlide={getInitialSlide()}
          onSlideChange={handleSlideChange}
        >
          {dates.map((date) => (
            <SwiperSlide
              key={date.getTime()}
              className="!flex justify-center"
            >
              <div
                className={`py-1.5 px-2 sm:py-2 sm:px-3 rounded-md sm:rounded-lg cursor-pointer text-center 
                  w-[60px] sm:w-[70px] text-xs font-mono tracking-tight
                  ${
                    isSelected(date)
                      ? "bg-blue-600 text-white"
                      : "bg-blue-900 hover:bg-blue-800 text-white"
                  }`}
                onClick={() => onSelect(date)}
              >
                {formatDate(date)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {renderNavButton(false, onNext, !!disableNext)}
    </div>
  );
};

export default DateCarousel;
