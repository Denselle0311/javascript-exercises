const findTheOldest = function(arr) {
  return arr.reduce((prev,curr) => 
    getAge(prev.yearOfBirth,prev.yearOfDeath) < getAge(curr.yearOfBirth,curr.yearOfDeath) ? curr : prev
  )
};

function getAge(birthDate,deathDate) {
  let thisYear = new Date().getFullYear();
  deathDate = deathDate ? deathDate : thisYear;
  return deathDate - birthDate
}

// Do not edit below this line
module.exports = findTheOldest;
