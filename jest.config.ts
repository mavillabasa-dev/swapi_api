import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/__tests__/**/*.test.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
};

export default config;
