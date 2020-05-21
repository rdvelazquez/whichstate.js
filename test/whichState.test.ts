const whichState = require("./../src/whichState");

test("getName test", () => {
  expect(whichState.getName([1, 1])).toBe("not in a state");
  expect(whichState.getName([-75.668792, 36.019905])).toBe("North Carolina");
});

test("getInitials test", () => {
  expect(whichState.getInitials([1, 1])).toBe("not in a state");
  expect(whichState.getInitials([-75.668792, 36.019905])).toBe("NC");
});
