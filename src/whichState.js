"use strict";
exports.__esModule = true;
var insideStateFeature = require("./insideStateFeature");
var statesGeoJson = require("./data/gz_2010_us_040_00_5m.json");
function getState(point) {
    var stateFound = false;
    var stateName;
    for (var _i = 0, _a = statesGeoJson.features; _i < _a.length; _i++) {
        var stateFeature = _a[_i];
        if (insideStateFeature(point, stateFeature)) {
            stateName = stateFeature.properties.NAME;
            stateFound = true;
            break;
        }
    }
    if (stateFound) {
        return stateName;
    }
    else {
        return "not in a state";
    }
}
module.exports = {
    getState: getState
};
