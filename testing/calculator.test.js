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
