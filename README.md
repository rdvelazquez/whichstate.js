![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rdvelazquez/whichstate.js/whichstateCI)
[![npm version](https://badge.fury.io/js/whichstate.svg)](https://badge.fury.io/js/whichstate) 
![npm bundle size](https://img.shields.io/bundlephobia/min/whichstate)

# whichState.js

## Find out which US state a point (longitude, latitude) is in.

- Light: < 1 MB  
- Fast: ~0.22 ms  
- Easy to use  

### Install

```
npm install whichstate
```

or

```
yarn add whichstate
```

### Use

```
const whichState = require("whichstate");

const stateInitials = whichState.getInitials([-75.149982, 39.948900])
console.log(stateInitials) // PA

const stateName = whichState.getName([-75.149982, 39.948900])
console.log(stateName) // Pennsylvania
```

## Development

Compile `yarn compile`  
Test `yarn test`  
Test Performance `yarn performanceTest`  
Lint `yarn lint`  
Publish to NPM `npm publish`

## Credits

Ray casting algorithm in JS from https://github.com/substack/point-in-polygon  
State Boundaries from https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html and https://eric.clst.org/tech/usgeojson/ (simplified with https://mapshaper.org)
