"use strict";
exports.__esModule = true;
var inside = require("./inside");
/**
 * Unravels nested polygons into an array of polygons
 *
 * @param multiPoly a polygon of arbitrary depth with at it's deepest contains arrays of coordinate pairs
 * @returns An array of polygons
 */
function arrayOfSubPolygonsFromMultiPolygons(multiPolygon) {
    function isPolygon(potentialPolygon) {
        if (typeof potentialPolygon[0][0] == "number") {
            return true;
        }
        else {
            return false;
        }
    }
    function isAllUnraveled(potentialPolygonsArray) {
        // Check that it's not just a single polygon first
        if (typeof potentialPolygonsArray[0][0] == "number") {
            return true;
        }
        var isAllUnraveledStatus = true;
        potentialPolygonsArray.map(function (potentialPolygon) {
            if (!isPolygon(potentialPolygon)) {
                isAllUnraveledStatus = false;
            }
        });
        return isAllUnraveledStatus;
    }
    // First check if it is allredy unraveled and ready to go
    if (isAllUnraveled(multiPolygon)) {
        return multiPolygon;
    }
    var unraveledPolygons = [];
    while (!isAllUnraveled(multiPolygon)) {
        multiPolygon.map(function (potentialPolygon) {
            if (isPolygon(potentialPolygon)) {
                unraveledPolygons.push(potentialPolygon);
            }
            else {
                potentialPolygon.forEach(function (subPolygon) {
                    unraveledPolygons.push(subPolygon);
                });
            }
        });
        multiPolygon = unraveledPolygons;
    }
    return unraveledPolygons;
}
/**
 *
 * @param point
 * @param multiPoly
 */
function checkIfInsideAnyMultiPolygon(point, multiPolygon) {
    var isInside = false;
    // TODO: replace this with .some
    multiPolygon.forEach(function (polygon) {
        if (inside(point, polygon)) {
            isInside = true;
        }
    });
    return isInside;
}
/**
 *
 * @param point lat, lon
 * @param stateFeature A geojson feature with at least `properties.NAME` and `geometry.coordinates`
 */
function insideStateFeature(point, stateFeature) {
    var geometry = stateFeature.geometry;
    var unraveledCoordinates = arrayOfSubPolygonsFromMultiPolygons(geometry.coordinates);
    return checkIfInsideAnyMultiPolygon(point, unraveledCoordinates);
}
module.exports = insideStateFeature;
