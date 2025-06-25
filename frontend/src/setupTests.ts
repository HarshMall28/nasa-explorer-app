import "@testing-library/jest-dom";

Object.defineProperty(globalThis, "import.meta", {
  value: {
    env: {
      VITE_API_URL: "http://localhost:5150/api",
    },
  },
});
