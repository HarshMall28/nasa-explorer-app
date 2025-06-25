import type { ApodData } from "../../types/apod.types";
import ApodMedia from "./ApodMedia";
import ApodHeader from "./ApodHeader";

interface ApodCardProps {
  data: ApodData;
}

/**
 * APOD Card component — displays media, header, explanation, and copyright.
 */
const ApodCard = ({ data }: ApodCardProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 md:space-y-8 px-0 sm:px-0">
      <div className="relative aspect-square md:aspect-video max-h-[60vh] md:max-h-[80vh] w-full px-2 sm:px-0">
        <ApodMedia data={data} />
      </div>

      <div className="bg-gray-900/80 md:bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-700 md:border-gray-800 shadow-lg w-full">
        <ApodHeader data={data} />

        <p className="text-gray-300 text-base md:text-base lg:text-lg leading-relaxed">
          {data.explanation}
        </p>

        {data.copyright && (
          <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700 md:border-gray-800">
            <p className="text-xs md:text-sm text-gray-400 font-mono">
              © {data.copyright.trim()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApodCard;
