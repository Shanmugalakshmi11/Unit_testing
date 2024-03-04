const minMax = require("./minMax");

test("returns the smaller value: a=5, b=8", () => {
  const res = minMax.min(5, 8);
  expect(res).toBe(5);
});

test("returns the smaller value: a=-3, b=2", () => {
  const res = minMax.min(-3, 2);
  expect(res).toBe(-3);
});

test("returns the smaller value: a=0, b=0", () => {
  const res = minMax.min(0, 0);
  expect(res).toBe(0);
});

test("returns the Larger value: a=15, b=28", () => {
  const res = minMax.max(15, 28);
  expect(res).toBe(28);
});

test("returns the smaller value: a=-13, b=50", () => {
  const res = minMax.max(-13, -50);
  expect(res).toBe(-13);
});

test("returns the smaller value: a=0, b=0", () => {
  const res = minMax.max(0, 0);
  expect(res).toBe(0);
});
