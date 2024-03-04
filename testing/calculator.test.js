// MathFunctions.test.js
const calculator = require("./calculator");

// Tests where both a and b are positive
test("positive numbers: a=2, b=3", () => {
  const res = calculator.add(2, 3);
  expect(res).toBe(5);
});

test("positive numbers: a=5, b=7", () => {
  const res = calculator.add(5, 7);
  expect(res).toBe(12);
});

test("positive numbers: a=10, b=1", () => {
  const res = calculator.add(10, 1);
  expect(res).toBe(11);
});

// Tests where either a or b is negative
test("one negative number: a=-4, b=8", () => {
  const res = calculator.add(-4, 8);
  expect(res).toBe(4);
});

test("one negative number: a=5, b=-3", () => {
  const res = calculator.add(5, -3);
  expect(res).toBe(2);
});

// Tests where either a or b is 0
test("a is 0: a=0, b=7", () => {
  const res = calculator.add(0, 7);
  expect(res).toBe(7);
});

test("b is 0: a=3, b=0", () => {
  const res = calculator.add(3, 0);
  expect(res).toBe(3);
});

// Tests for subtraction
test("positive numbers: a=8, b=3", () => {
  const res = calculator.subtract(8, 3);
  expect(res).toBe(5);
});

test("one negative number: a=5, b=-2", () => {
  const res = calculator.subtract(5, -2);
  expect(res).toBe(7);
});

test("a is 0: a=0, b=4", () => {
  const res = calculator.subtract(0, 4);
  expect(res).toBe(-4);
});

// Tests for multiplication
test("positive numbers: a=3, b=4", () => {
  const res = calculator.multiply(3, 4);
  expect(res).toBe(12);
});

test("one negative number: a=-2, b=5", () => {
  const res = calculator.multiply(-2, 5);
  expect(res).toBe(-10);
});

test("one of them is 0: a=7, b=0", () => {
  const res = calculator.multiply(7, 0);
  expect(res).toBe(0);
});

// Tests for division
test("positive numbers: a=8, b=2", () => {
  const res = calculator.divide(8, 2);
  expect(res).toBe(4);
});

test("one negative number: a=5, b=-1", () => {
  const res = calculator.divide(5, -1);
  expect(res).toBe(-5);
});

test("one of them is 0: a=0, b=4", () => {
  const res = calculator.divide(0, 4);
  expect(res).toBe(0);
});

test("division by zero: a=10, b=0", () => {
  expect(() => divide(10, 0)).toThrowErrorMatchingSnapshot(
    "Cannot divide by zero"
  );
});
