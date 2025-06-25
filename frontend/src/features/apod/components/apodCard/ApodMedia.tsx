import type { ApodData } from "../../types/apod.types";

interface ApodMediaProps {
  data: ApodData;
}

/**
 * Renders the APOD media: image, video, or fallback.
 */
const ApodMedia = ({ data }: ApodMediaProps) => {
  if (data.media_type === "image") {
    return (
      <div className="group relative w-full h-full overflow-hidden rounded-lg md:rounded-xl shadow-xl md:shadow-2xl">
        <img
          src={data.url || data.hdurl}
          alt={data.title}
          className="w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  if (data.media_type === "video") {
    return (
      <div className="relative w-full aspect-square md:aspect-video rounded-lg md:rounded-xl shadow-xl md:shadow-2xl overflow-hidden">
        <iframe
          src={data.url}
          title={data.title}
          allowFullScreen
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 md:from-black/30 to-transparent pointer-events-none" />
      </div>
    );
  }

  console.warn(`Unsupported APOD media type: ${data.media_type}`);
  return (
    <div className="p-4 md:p-6 text-center text-white bg-gradient-to-br from-gray-800 to-gray-700 md:from-gray-900 md:to-gray-800 rounded-lg md:rounded-xl shadow-lg">
      <p className="text-sm text-gray-400 mb-3">
        This APOD doesn't have an image or video. You can view details
        on NASA's site.
      </p>
      <a
        href={data.url || "https://apod.nasa.gov/apod/"}
        className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 rounded-md md:rounded-lg transition-colors duration-200 text-sm md:text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on NASA
      </a>
    </div>
  );
};

export default ApodMedia;
