module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "__test__/coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageReporters: ['text', 'lcov'],
  testEnvironment: "node",
  testMatch: ["**/__test__/**/*.test.js?(x)"],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
