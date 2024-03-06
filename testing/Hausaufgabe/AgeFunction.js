// AgeFunction.js
function isAdult(birthDate, legalAge = 18) {
  // Parse the birth date string to a JavaScript Date object
  const dob = new Date(birthDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  const age = currentDate.getFullYear() - dob.getFullYear();

  // Check if the birthday has occurred this year
  const hasBirthdayOccurred =
    currentDate.getMonth() > dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() >= dob.getDate());

  // If the birthday has not occurred yet this year, subtract 1 from the age
  const adjustedAge = hasBirthdayOccurred ? age : age - 1;

  // Check if the adjusted age is equal to or greater than the legal age
  return adjustedAge >= legalAge;
}

module.exports = isAdult;
