module.exports = {
  // verbose: true,
  preset: "ts-jest",
  globals: {},
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  coverageDirectory: "coverage/clover",
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage/junit", outputName: "junit.xml" }]],
  modulePathIgnorePatterns: ["<rootDir>/tests/e2e"]
};
