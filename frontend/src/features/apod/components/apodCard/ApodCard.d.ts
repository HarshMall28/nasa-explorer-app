import type { ApodData } from "../../types/apod.types";
interface ApodCardProps {
    data: ApodData;
}
/**
 * APOD Card component — displays media, header, explanation, and copyright.
 */
declare const ApodCard: ({ data }: ApodCardProps) => import("react/jsx-runtime").JSX.Element;
export default ApodCard;
