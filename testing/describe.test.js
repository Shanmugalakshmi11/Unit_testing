const calculator = require("./calculator");

describe("Math operations", () => {
  // Individual test case
  it("should add two numbers correctly", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  // Individual test case
  it("should multiply two numbers correctly", () => {
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  // You can nest describe blocks for further organization
  describe("Addition with negative numbers", () => {
    // Test case within the nested describe block
    it("should add a negative number correctly", () => {
      const result = calculator.add(5, -3);
      expect(result).toBe(2);
    });

    // Another test case within the nested describe block
    it("should add two negative numbers correctly", () => {
      const result = calculator.add(-7, -3);
      expect(result).toBe(-10);
    });
  });

  // You can use beforeEach for common setup before each test
  describe("Multiplication with a common setup", () => {
    let result;

    beforeEach(() => {
      // Common setup before each test in this describe block
      result = calculator.multiply(2, 3);
    });

    // Test case within the describe block
    it("should multiply two numbers correctly", () => {
      expect(result).toBe(6);
    });

    // Another test case within the same describe block
    it("should multiply a number by zero correctly", () => {
      const zeroResult = calculator.multiply(result, 0);
      expect(zeroResult).toBe(0);
    });
  });
});
