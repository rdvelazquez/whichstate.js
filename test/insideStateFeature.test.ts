export {};
const insideStateFeature = require("./../src/insideStateFeature");
const statesGeoJson = require("./../src/data/gz_2010_us_040_00_5m.json");

let NCStateFeature: object;
let NYStateFeature: object;

statesGeoJson.features.map((stateFeature) => {
  if (stateFeature.properties.NAME == "North Carolina") {
    NCStateFeature = stateFeature;
  } else if (stateFeature.properties.NAME == "New York") {
    NYStateFeature = stateFeature;
  }
});

test("NC insideStateFeature test", () => {
  expect(insideStateFeature([-75.668792, 36.019905], NCStateFeature)).toBe(
    true
  );
  expect(insideStateFeature([2.5, 1.5], NCStateFeature)).toBe(false);
});

test("NY insideStateFeature test", () => {
  expect(insideStateFeature([-73.985871, 40.748209], NYStateFeature)).toBe(
    true
  );
  expect(insideStateFeature([2.5, 1.5], NYStateFeature)).toBe(false);
});
