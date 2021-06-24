const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "^~application(.*)$": "<rootDir>/src/application/$1",
    "^~domain(.*)$": "<rootDir>/src/domain/$1",
    "^~factory(.*)$": "<rootDir>/src/factory/$1",
    "^~infrastructure(.*)$": "<rootDir>/src/infrastructure/$1",
    "^~src(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
