module.exports = {
  "moduleFileExtensions": [
    "js"
  ],
  "moduleDirectories": [
    "node_modules",
    "spec",
    "src"
  ],
  "testMatch": [
    "**/test/**/*.spec.(js)",
    "**/test/**/*.test.(js)",
  ],
  "testEnvironment": "node",
  "setupTestFrameworkScriptFile": "./test/support/index.js",
  "notify": false,
  "clearMocks": false,
  "verbose": false,
  "timers": "fake",
}
