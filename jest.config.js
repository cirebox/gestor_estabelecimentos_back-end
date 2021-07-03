module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  coverageProvider: "v8",
  testEnvironment:"node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)",    
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  // Whether to use watchman for file crawling
  // watchman: true,
};
