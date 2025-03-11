const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages 2 pages", () => {
  const input = {
    "https://andressa.tech/about": 1,
    "https://andressa.tech": 2,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://andressa.tech", 2],
    ["https://andressa.tech/about", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://andressa.tech/about": 1,
    "https://andressa.tech": 2,
    "https://andressa.tech/contact": 1,
    "https://andressa.tech/portfolio": 3,
    "https://andressa.tech/blog": 1,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://andressa.tech/portfolio", 3],
    ["https://andressa.tech", 2],
    ["https://andressa.tech/about", 1],
    ["https://andressa.tech/contact", 1],
    ["https://andressa.tech/blog", 1],
  ];
  expect(actual).toEqual(expected);
});
