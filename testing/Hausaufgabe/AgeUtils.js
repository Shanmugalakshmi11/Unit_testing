// ageUtils.js
function calculateAge(birthDate) {
  const dob = new Date(birthDate);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dob.getFullYear();
  const hasBirthdayOccurred =
    currentDate.getMonth() > dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() >= dob.getDate());

  if (!hasBirthdayOccurred) {
    age--;
  }

  return age;
}

module.exports = calculateAge;
