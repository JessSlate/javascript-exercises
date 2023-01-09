const convertToCelsius = function(tempFahrenheit) {
  let conversionConstant = 5/9;
  let celsiusTemp = (tempFahrenheit - 32) * conversionConstant;
  return Math.round(celsiusTemp * 10) / 10;

};

const convertToFahrenheit = function(tempCelsius) {
  let conversionConstant = 9/5;
  let fahrenheitTemp = (tempCelsius * conversionConstant) + 32;
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
