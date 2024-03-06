// MathFunctions.test.js
const calculator = require("./calculator");

// Tests where both a and b are positive
test("positive numbers: a=2, b=3", () => {
  //Arrange
  const a = 2;
  const b = 3;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(5);
});

test("positive numbers: a=5, b=7", () => {
  //Arrange
  const a = 5;
  const b = 7;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(12);
});

test("positive numbers: a=10, b=1", () => {
  //Arrange
  const a = 10;
  const b = 1;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(11);
});

// Tests where either a or b is negative
test("one negative number: a=-4, b=8", () => {
  //Arrange
  const a = -4;
  const b = 8;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(4);
});

test("one negative number: a=5, b=-3", () => {
  //Arrange
  const a = 5;
  const b = -3;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(2);
});

// Tests where either a or b is 0
test("a is 0: a=0, b=7", () => {
  //Arrange
  const a = 0;
  const b = 7;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(7);
});

test("b is 0: a=3, b=0", () => {
  //Arrange
  const a = 3;
  const b = 0;

  //Act
  const res = calculator.add(a, b);

  //Assert
  expect(res).toBe(3);
});

// Tests for subtraction
test("positive numbers: a=8, b=3", () => {
  //Arrange
  const a = 8;
  const b = 3;

  //Act
  const res = calculator.subtract(8, 3);

  //Assert
  expect(res).toBe(5);
});

test("one negative number: a=5, b=-2", () => {
  //Arrange
  const a = 5;
  const b = -2;

  //Act
  const res = calculator.subtract(5, -2);

  //Assert
  expect(res).toBe(7);
});

test("a is 0: a=0, b=4", () => {
  //Arrange
  const a = 0;
  const b = 4;

  //Act
  const res = calculator.subtract(0, 4);

  //Assert
  expect(res).toBe(-4);
});

// Tests for multiplication
test("positive numbers: a=3, b=4", () => {
  //Arrange
  const a = 3;
  const b = 4;

  //Act
  const res = calculator.multiply(3, 4);

  //Assert
  expect(res).toBe(12);
});

test("one negative number: a=-2, b=5", () => {
  //Arrange
  const a = -2;
  const b = 5;

  //Act
  const res = calculator.multiply(-2, 5);

  //Assert
  expect(res).toBe(-10);
});

test("one of them is 0: a=7, b=0", () => {
  //Arrange
  const a = 7;
  const b = 0;

  //Act
  const res = calculator.multiply(7, 0);

  //Assert
  expect(res).toBe(0);
});

// Tests for division
test("positive numbers: a=8, b=2", () => {
  //Arrange
  const a = 8;
  const b = 2;

  //Act
  const res = calculator.divide(8, 2);

  //Assert
  expect(res).toBe(4);
});

test("one negative number: a=5, b=-1", () => {
  //Arrange
  const a = 5;
  const b = -1;

  //Act
  const res = calculator.divide(5, -1);

  //Assert
  expect(res).toBe(-5);
});

test("one of them is 0: a=0, b=4", () => {
  //Arrange
  const a = 0;
  const b = 4;

  //Act
  const res = calculator.divide(0, 4);

  //Assert
  expect(res).toBe(0);
});

test("division by zero: a=10, b=0", () => {
  expect(() => divide(10, 0)).toThrowErrorMatchingSnapshot(
    "Cannot divide by zero"
  );
});

// Test 1: ".todo" suffix
test.todo("Test with .todo suffix: should add two numbers correctly");
test("Regular test: should subtract two numbers correctly", () => {
  const result = add(5, 3);
  expect(result).toBe(8);
});

// Test 2: ".todo" suffix
test.todo("Test with .todo suffix: should multiply two numbers correctly");
test("Regular test: should divide two numbers correctly", () => {
  const result = multiply(4, 2);
  expect(result).toBe(8);
});

// Test 3: ".skip" suffix
test.skip("Test with .skip suffix: should calculate something", () => {
  // Test logic
  const result = calculateSomething(5, 3);
  // Assume there is an assertion library (e.g., chai, jest assertions) for checking expectations
  expect(result).toEqual(8);
});

// Test 4: ".skip" suffix
test.skip("Test with .skip suffix: should perform some operation", () => {
  // Test logic
  const result = performSomeOperation("input");
  expect(result).toBeTruthy();
});

// Test 5: ".skip" suffix
test.skip("Test with .skip suffix: should handle a special case", () => {
  // Test logic
  const result = handleSpecialCase(true);
  expect(result).toBeFalsy();
});

// Describe block with ".only" suffix
describe.only("Focused tests", () => {
  // Nested Test 1
  it("Nested test 1: should perform a focused task", () => {
    // Test logic
    const result = focusedTask(10);
    expect(result).toBeGreaterThan(0);
  });

  // Nested Test 2
  it("Nested test 2: should handle another focused case", () => {
    // Test logic
    const result = handleAnotherFocusedCase("value");
    expect(result).toBeDefined();
  });

  // Nested Test 3 (outside .only block)
  it("Nested test 3: should handle a general case", () => {
    // Test logic
    const result = handleGeneralCase([1, 2, 3]);
    expect(result).toHaveLength(3);
  });
});

// Example functions corresponding to the test logic
function calculateSomething(a, b) {
  return a + b;
}

function performSomeOperation(input) {
  // Assume some operation is performed on the input
  return input.toUpperCase();
}

function handleSpecialCase(flag) {
  // Assume some handling of a special case based on the flag
  return !flag;
}

function focusedTask(number) {
  // Assume a focused task is performed based on the input number
  return number * 2;
}

function handleAnotherFocusedCase(value) {
  // Assume another focused case is handled based on the input value
  return value.length;
}

function handleGeneralCase(array) {
  // Assume some general case handling based on the input array
  return array.reverse();
}

// Custom implementation of ".failing" scenario
const failingTests = [true, false];

for (const isFailing of failingTests) {
  const testFunction = isFailing ? it.failing : it;

  testFunction("Custom failing test: should demonstrate failure", () => {
    if (isFailing) {
      expect(false).toBe(true); // Simulate a failing assertion
    } else {
      expect(true).toBe(true); // Simulate a passing assertion
    }
  });
}
