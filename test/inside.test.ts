export {};
const inside = require("./../src/inside");

test("simple inside test", () => {
  const simpleSquare = [[1, 1], [1, 2], [2, 2], [2, 1]];

  expect(inside([1.5, 1.5], simpleSquare)).toBe(true);
  expect(inside([2.5, 1.5], simpleSquare)).toBe(false);
});
