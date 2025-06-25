import { render, screen } from "@testing-library/react";
import ApodMedia from "../../components/apodCard/ApodMedia";
import type { ApodData } from "../../types/apod.types";

const baseData: Partial<ApodData> = {
  date: "2024-06-22",
  title: "Test Title",
  service_version: "v1",
  explanation: "",
};

describe("ApodMedia", () => {
  it("renders image media", () => {
    const data = {
      ...baseData,
      media_type: "image",
      url: "https://example.com/image.jpg",
      hdurl: "https://example.com/hdimage.jpg",
    } as ApodData;

    render(<ApodMedia data={data} />);
    const img = screen.getByAltText("Test Title");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", data.hdurl);
  });

  it("renders video media", () => {
    const data = {
      ...baseData,
      media_type: "video",
      url: "https://example.com/video",
    } as ApodData;

    render(<ApodMedia data={data} />);
    const iframe = screen.getByTitle("Test Title");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", data.url);
  });

  it("renders fallback for unsupported media type", () => {
    const data = {
      ...baseData,
      media_type: "other",
      url: "https://example.com",
    } as ApodData;

    render(<ApodMedia data={data} />);
    expect(
      screen.getByText(/doesn't have an image or video/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      data.url
    );
  });
});
