/**
 * ApodSkeleton component
 * Displays a loading skeleton placeholder for the APOD card layout
 * Includes animated media + content placeholders to indicate loading state
 */
const ApodSkeleton = () => {
  return (
    <div
      data-testid="apod-skeleton"
      className="w-full max-w-6xl mx-auto px-4"
      aria-hidden="true" // Skeletons are not meaningful for screen readers
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl animate-pulse">
        <div className="flex flex-col lg:flex-row">
          {/* Media Skeleton */}
          <div className="lg:w-1/2 p-4 lg:p-6">
            <div
              className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-xl"
              data-testid="skeleton-media"
            />
          </div>

          {/* Content Skeleton */}
          <div className="lg:w-1/2 p-6 lg:p-8 space-y-4">
            {/* Title */}
            <div
              className="h-8 bg-white/20 rounded w-3/4"
              data-testid="skeleton-title"
            />

            {/* Date */}
            <div
              className="h-4 bg-white/15 rounded w-1/3"
              data-testid="skeleton-date"
            />

            {/* Paragraph lines */}
            <div className="space-y-3 mt-6">
              <div className="h-4 bg-white/15 rounded w-full" />
              <div className="h-4 bg-white/15 rounded w-5/6" />
              <div className="h-4 bg-white/15 rounded w-2/3" />
              <div className="h-4 bg-white/15 rounded w-4/5" />
            </div>

            {/* Copyright / Footer */}
            <div className="mt-8 pt-4 border-t border-white/20">
              <div
                className="h-3 bg-white/10 rounded w-1/4"
                data-testid="skeleton-footer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodSkeleton;
