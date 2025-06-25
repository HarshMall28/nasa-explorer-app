import { render, screen } from "@testing-library/react";
import ApodSkeleton from "../components/ApodSkeleton";

describe("ApodSkeleton", () => {
  it("renders the skeleton container", () => {
    render(<ApodSkeleton />);
    expect(screen.getByTestId("apod-skeleton")).toBeInTheDocument();
  });

  it("renders the media skeleton", () => {
    render(<ApodSkeleton />);
    expect(screen.getByTestId("skeleton-media")).toBeInTheDocument();
  });

  it("renders the title placeholder", () => {
    render(<ApodSkeleton />);
    expect(screen.getByTestId("skeleton-title")).toBeInTheDocument();
  });

  it("renders the date placeholder", () => {
    render(<ApodSkeleton />);
    expect(screen.getByTestId("skeleton-date")).toBeInTheDocument();
  });

  it("renders the footer placeholder", () => {
    render(<ApodSkeleton />);
    expect(screen.getByTestId("skeleton-footer")).toBeInTheDocument();
  });
});
