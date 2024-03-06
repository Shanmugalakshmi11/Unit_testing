const division = require("./MathFunction");

// Define a test suite using describe
describe("Division tests", () => {
  // Test 1: Division with a non-zero divisor
  test("should divide two numbers with a non-zero divisor", () => {
    const result = division.divideNrs(10, 2);
    expect(result).toBe(5);
  });

  // Test 2: Division by zero
  test("should throw an error for division by zero", () => {
    expect(() => division.divideNrs(10, 0)).toThrow(TypeError);
  });

  // Test 3: Another test case
  test("should handle another test case", () => {
    const result = division.divideNrs(8, 4);
    expect(result).toBe(2);
  });
});
