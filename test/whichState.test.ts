export {};
const whichState = require("./../src/whichState");

test("getName test", () => {
  expect(whichState.getName([1, 1])).toBe("not in a state");
  expect(whichState.getName([-75.668792, 36.019905])).toBe("North Carolina");
  expect(whichState.getName([-73.985811, 40.748218])).toBe("New York");
  expect(whichState.getName([-74.160586, 40.371163])).toBe("New Jersey");
  expect(whichState.getName([-122.009159, 37.334802])).toBe("California");
});

test("getInitials test", () => {
  expect(whichState.getInitials([1, 1])).toBe("not in a state");
  expect(whichState.getInitials([-75.668792, 36.019905])).toBe("NC");
  expect(whichState.getInitials([-73.985811, 40.748218])).toBe("NY");
  expect(whichState.getInitials([-74.160586, 40.371163])).toBe("NJ");
});
