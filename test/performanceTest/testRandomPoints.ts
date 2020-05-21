const whichState = require("./../../src/whichState");

function generateRandomPoint() {
  const y = 20 + Math.random() * 40;
  const x = -130 + Math.random() * 50;
  return [x, y];
}

let randomPoints = [];
for (var i = 0; i <= 1000; i++) {
  randomPoints.push(generateRandomPoint());
}

console.time("Finding the state for 1,000 random points took");
let states = [];
for (var point of randomPoints) {
  states.push(whichState.getName(point));
}

console.timeEnd("Finding the state for 1,000 random points took");
