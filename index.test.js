const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("./index");

test("greet returns expected message", () => {
  assert.equal(greet("World"), "Hello, World!");
});