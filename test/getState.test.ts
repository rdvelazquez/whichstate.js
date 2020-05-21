const whichState = require("./../src/whichState");

test("getState place holder test", () => {
  expect(whichState.getState([1, 1])).toBe("not in a state");
  expect(whichState.getState([-75.668792, 36.019905])).toBe("North Carolina");
});
