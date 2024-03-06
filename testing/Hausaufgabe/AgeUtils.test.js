// ageUtils.test.js
const calculateAge = require("./AgeUtils");

describe("calculateAge function", () => {
  // Test case for calculating age for a person born in the past
  test("should calculate age correctly for a person born in the past", () => {
    const birthDate = "1990-03-15";
    const age = calculateAge(birthDate);
    expect(age).toBe(33); // Adjust this value based on the current year
  });

  // Test case for calculating age for a person born on the current date
  test("should calculate age correctly for a person born on the current date", () => {
    const currentDate = new Date();
    const birthDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const age = calculateAge(birthDate);
    expect(age).toBe(0);
  });

  // Test case for calculating age for a person born in the future (not yet reached their birthday)
  test("should calculate age correctly for a person born in the future", () => {
    const birthDate = "2030-08-20";
    const age = calculateAge(birthDate);
    expect(age).toBe(-7); // Adjust this value based on the current year
  });

  // Test case for calculating age with a custom current date (for testing edge cases)
  test("should calculate age correctly with a custom current date", () => {
    const customCurrentDate = new Date("2022-01-01");
    const birthDate = "1995-06-10";
    const age = calculateAge(birthDate, customCurrentDate);
    expect(age).toBe(28); // Adjust this value based on the custom current date
  });
});
