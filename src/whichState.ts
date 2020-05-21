export {};
const insideStateFeature = require("./insideStateFeature");
const statesGeoJson = require("./data/gz_2010_us_040_00_5m.json");

function getState(point: [number, number]) {
  let stateFound: boolean = false;
  let stateName: string;

  for (var stateFeature of statesGeoJson.features) {
    if (insideStateFeature(point, stateFeature)) {
      stateName = stateFeature.properties.NAME;
      stateFound = true;
      break;
    }
  }
  if (stateFound) {
    return stateName;
  } else {
    return "not in a state";
  }
}

module.exports = {
  getState: getState,
};
