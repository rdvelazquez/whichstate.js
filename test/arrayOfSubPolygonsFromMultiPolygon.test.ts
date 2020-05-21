const rewire = require("rewire");
const insideStateFeature_module = rewire("./../src/insideStateFeature");
const arrayOfSubPolygonsFromMultiPolygons = insideStateFeature_module.__get__(
  "arrayOfSubPolygonsFromMultiPolygons"
);

const multiPoly1 = [[1, 2], [3, 4]];
const multiPoly2 = [[[1, 2], [3, 4]]];
const multiPoly3 = [[[1, 2], [3, 4]], [[[5, 6], [7, 8]], [[9, 10], [11, 12]]]];
const multiPoly3_unraveled = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
  [[9, 10], [11, 12]],
];

test("arrayOfSubPolygonsFromMultiPolygons test", () => {
  expect(arrayOfSubPolygonsFromMultiPolygons(multiPoly1)).toEqual(multiPoly1);
  expect(arrayOfSubPolygonsFromMultiPolygons(multiPoly2)).toEqual(multiPoly2);
  expect(arrayOfSubPolygonsFromMultiPolygons(multiPoly3)).toEqual(
    multiPoly3_unraveled
  );
});
