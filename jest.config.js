module.exports = {
<<<<<<< HEAD
  "globals": {
    "gettext": (t) => { return t; },
  },
  "modulePaths": [
    "common/static/common/js/components",
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/setupTests.js",
  "testMatch": [
    "/**/*.test.jsx",
    "common/static/common/js/components/**/?(*.)+(spec|test).js?(x)",
  ],
  "transform": {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest",
  },
=======
    "globals": {
        "gettext": (t) => { return t; },
    },
    "modulePaths": [
        "common/static/common/js/components",
    ],
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "testMatch": [
        "/**/*.test.jsx",
        "common/static/common/js/components/**/?(*.)+(spec|test).js?(x)",
    ],
    "testEnvironment": "jsdom",
    "transform": {
        "^.+\\.jsx$": "babel-jest",
        "^.+\\.js$": "babel-jest",
    },
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
};
