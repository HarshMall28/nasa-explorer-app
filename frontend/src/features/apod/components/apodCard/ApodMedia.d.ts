import type { ApodData } from "../../types/apod.types";
interface ApodMediaProps {
    data: ApodData;
}
/**
 * Renders the APOD media: image, video, or fallback.
 */
declare const ApodMedia: ({ data }: ApodMediaProps) => import("react/jsx-runtime").JSX.Element;
export default ApodMedia;
