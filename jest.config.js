module.exports = {
  // verbose: true,
  preset: "vite-jest",
  globals: {
    _APP_VERSION: "0.0.1"
  },
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/src/**/*.{spec,test}.{ts,tsx}", "**/tests/unit/**/*.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage/clover",
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage/junit", outputName: "junit.xml" }]],
  modulePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/tests/e2e"]
};
