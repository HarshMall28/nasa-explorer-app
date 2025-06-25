import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  clearMocks: true,
  // optional: add coverage reporting
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default config;
