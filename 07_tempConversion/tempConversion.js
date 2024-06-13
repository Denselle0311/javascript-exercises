const convertToCelsius = function(temp) {
  let celsius = temp - 32;
  let rounded = Math.round(celsius*5)/9;
  return parseFloat(rounded.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return Math.round(temp*9)/5+32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
