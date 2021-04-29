/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  // verbose: true,
  preset: "ts-jest",
  globals: {},
  testEnvironment: "node",
  // testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  coverageDirectory: "coverage/clover",
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage/junit", outputName: "junit.xml" }]],
  modulePathIgnorePatterns: ["<rootDir>/tests/e2e"]
};
