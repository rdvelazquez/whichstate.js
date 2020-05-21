export {};
const inside = require("./inside");

/**
 * Unravels nested polygons into an array of polygons
 *
 * @param multiPoly a polygon of arbitrary depth with at it's deepest contains arrays of coordinate pairs
 * @returns An array of polygons
 */
function arrayOfSubPolygonsFromMultiPolygons(multiPolygon: Array<Array<any>>) {
  function isPolygon(potentialPolygon: any[]) {
    if (typeof potentialPolygon[0][0] == "number") {
      return true;
    } else {
      return false;
    }
  }

  function isAllUnraveled(potentialPolygonsArray: any[]) {
    // Check that it's not just a single polygon first
    if (typeof potentialPolygonsArray[0][0] == "number") {
      return true;
    }
    let isAllUnraveledStatus = true;
    potentialPolygonsArray.map((potentialPolygon) => {
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

  let unraveledPolygons: Array<Array<number>> = [];

  while (!isAllUnraveled(multiPolygon)) {
    multiPolygon.map((potentialPolygon) => {
      if (isPolygon(potentialPolygon)) {
        unraveledPolygons.push(potentialPolygon);
      } else {
        potentialPolygon.forEach((subPolygon) => {
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
function checkIfInsideAnyMultiPolygon(
  point: [number, number],
  multiPolygon: Array<Array<any>>
) {
  let isInside = false;
  // TODO: replace this with .some
  multiPolygon.forEach((polygon) => {
    if (inside(point, polygon)) {
      isInside = true;
    }
  });
  return isInside;
}

interface StateFeature {
  geometry: StateGeometry;
}

interface StateGeometry {
  coordinates: any[][];
}

/**
 *
 * @param point lat, lon
 * @param stateFeature A geojson feature with at least `properties.NAME` and `geometry.coordinates`
 */
function insideStateFeature(
  point: [number, number],
  stateFeature: StateFeature
) {
  const geometry: StateGeometry = stateFeature.geometry;
  const unraveledCoordinates: any[] = arrayOfSubPolygonsFromMultiPolygons(
    geometry.coordinates
  );
  return checkIfInsideAnyMultiPolygon(point, unraveledCoordinates);
}

module.exports = insideStateFeature;
