const test = require("node:test");
const assert = require("node:assert/strict");
const { getGreeting } = require("../src/index.js");

test("getGreeting returns the GitHub Actions greeting", () => {
  assert.equal(getGreeting(), "Hello from GitHub Actions");
});
