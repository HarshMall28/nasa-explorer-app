import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ApodCard from "../../components/apodCard/ApodCard";
import type { ApodData } from "../../types/apod.types";

const mockData: ApodData = {
  date: "2024-06-22",
  title: "Test Title",
  explanation: "This is a test explanation.",
  url: "https://example.com/image.jpg",
  media_type: "image",
  service_version: "v1",
  hdurl: "https://example.com/hdimage.jpg",
  copyright: "Test Author",
};

describe("ApodCard", () => {
  it("renders title, explanation, and copyright", () => {
    render(<ApodCard data={mockData} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test explanation.")
    ).toBeInTheDocument();
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
  });

  it("renders image media", () => {
    render(<ApodCard data={mockData} />);
    const img = screen.getByAltText("Test Title") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(mockData.hdurl);
  });
});
