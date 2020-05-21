export {};
const insideStateFeature = require("./insideStateFeature");
const statesGeoJson = require("./data/gz_2010_us_040_00_5m.json");
const stateAbbreviations = require("./data/stateAbbreviations.json");

function getName(point: [number, number]) {
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

function getInitials(point: [number, number]) {
  const stateName = getName(point);
  if (stateName == "not in a state") {
    return "not in a state";
  }
  const stateInitials = stateAbbreviations[stateName];
  return stateInitials;
}

module.exports = {
  getName: getName,
  getInitials: getInitials,
};
