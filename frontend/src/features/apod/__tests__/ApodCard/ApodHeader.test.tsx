import { render, screen } from "@testing-library/react";
import ApodHeader from "../../components/apodCard/ApodHeader";
import type { ApodData } from "../../types/apod.types";

const mockData: ApodData = {
  date: "2024-06-22",
  title: "Test Title",
  explanation: "",
  media_type: "image",
  service_version: "v1",
  url: "https://example.com/image.jpg",
};

describe("ApodHeader", () => {
  it("renders the title", () => {
    render(<ApodHeader data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders formatted date", () => {
    render(<ApodHeader data={mockData} />);
    expect(screen.getByText("Jun 22, 2024")).toBeInTheDocument();
  });
});
