const test = require("node:test");
const assert = require("node:assert/strict");
const { getGreeting, getVersion } = require("../src/index.js");

test("getGreeting returns the GitHub Actions greeting", () => {
  assert.equal(getGreeting(), "Hello from GitHub Actions.");
});

test("getVersion returns the project version", () => {
  assert.equal(getVersion(), "1.0.0");
});
