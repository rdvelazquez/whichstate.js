# whichState.js

## Simple js package to find out which US state a lat, lon point is in

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
Publish to NPM... just `npm publish`

## Credits

Ray casting algorithm in JS from https://github.com/substack/point-in-polygon  
State Boundaries from https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html and https://eric.clst.org/tech/usgeojson/
