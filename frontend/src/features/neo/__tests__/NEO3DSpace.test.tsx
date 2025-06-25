import { render, screen } from "@testing-library/react";
import { NEO3DSpace } from "../components/NEO3DSpace";

// Full mock to avoid React complaining about unknown 3D elements
jest.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: any) => <div>MockCanvas {children}</div>,
  useLoader: jest.fn(() => ({})),
}));

jest.mock("@react-three/drei", () => ({
  OrbitControls: () => <div>MockOrbitControls</div>,
  Stars: () => <div>MockStars</div>,
}));

jest.mock("@react-three/postprocessing", () => ({
  EffectComposer: ({ children }: any) => (
    <div>MockEffectComposer {children}</div>
  ),
  Bloom: () => <div>MockBloom</div>,
}));

describe("NEO3DSpace", () => {
  const sampleNeoData = [
    {
      x: 1,
      y: 2,
      z: 3,
      size: 0.5,
      isHazardous: false,
      name: "Asteroid A",
    },
    {
      x: -1,
      y: -2,
      z: -3,
      size: 1.0,
      isHazardous: true,
      name: "Asteroid B",
    },
  ];

  it("renders legend and disclaimer text", () => {
    render(<NEO3DSpace neoData={sampleNeoData} />);

    expect(
      screen.getByText(/Non-hazardous asteroid/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Potentially hazardous asteroid/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Note: This visualization is for illustration only/i
      )
    ).toBeInTheDocument();
  });

  it("renders mocked 3D components", () => {
    render(<NEO3DSpace neoData={sampleNeoData} />);

    expect(screen.getByText("MockCanvas")).toBeInTheDocument();
    expect(screen.getByText("MockStars")).toBeInTheDocument();
    expect(screen.getByText("MockOrbitControls")).toBeInTheDocument();
    expect(
      screen.getByText("MockEffectComposer")
    ).toBeInTheDocument();
    expect(screen.getByText("MockBloom")).toBeInTheDocument();
  });

  // No need to check <mesh> elements in unit tests — that's for visual/integration testing
});
