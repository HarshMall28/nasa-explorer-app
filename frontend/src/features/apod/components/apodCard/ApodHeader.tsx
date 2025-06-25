import type { ApodData } from "../../types/apod.types";

interface ApodHeaderProps {
  data: ApodData;
}

/**
 * Displays the APOD title and formatted date.
 */
const ApodHeader = ({ data }: ApodHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4 mb-4 md:mb-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-snug">
        {data.title}
      </h2>
      <div className="flex items-center text-cyan-300 text-sm md:text-base">
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="ml-1.5 md:ml-2 font-medium">
          {new Date(data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default ApodHeader;
