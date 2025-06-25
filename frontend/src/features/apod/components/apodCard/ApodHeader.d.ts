import type { ApodData } from "../../types/apod.types";
interface ApodHeaderProps {
    data: ApodData;
}
/**
 * Displays the APOD title and formatted date.
 */
declare const ApodHeader: ({ data }: ApodHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default ApodHeader;
