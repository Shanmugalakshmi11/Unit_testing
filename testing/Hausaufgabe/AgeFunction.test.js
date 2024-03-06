// AgeFunction.test.js
const isAdult = require("./AgeFunction");

describe("isAdult function", () => {
  // Test case for an adult
  test("should return true if the person is an adult", () => {
    const birthDate = "1990-03-15";
    const legalAge = 18;
    expect(isAdult(birthDate, legalAge)).toBe(true);
  });

  // Test case for a minor
  test("should return false if the person is not an adult", () => {
    const birthDate = "2009-08-10";
    const legalAge = 18;
    expect(isAdult(birthDate, legalAge)).toBe(false);
  });

  // Nested describe block for custom legal age
  describe("with custom legal age", () => {
    // Test case for an adult with custom legal age
    test("should return true if the person is an adult", () => {
      const birthDate = "2000-01-01";
      const legalAge = 21;
      expect(isAdult(birthDate, legalAge)).toBe(true);
    });

    // Test case for a minor with custom legal age
    test("should return false if the person is not an adult", () => {
      const birthDate = "2010-05-20";
      const legalAge = 21;
      expect(isAdult(birthDate, legalAge)).toBe(false);
    });
  });
});
