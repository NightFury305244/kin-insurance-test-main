module.exports = {
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
      "^axios$": "<rootDir>/node_modules/axios/index.js"
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)', // This line makes sure axios is transformed
    ],
  }