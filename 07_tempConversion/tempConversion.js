const convertToCelsius = function(temp) {
  // x Fahrenheit = (x -32) * 5/9 Celsius

  let tempCelsius = (temp - 32) * 5 / 9;
  tempCelsius.toFixed(1);
  return tempCelsius

};

const convertToFahrenheit = function(temp) {
  let tempFahrenheit = (temp * 9/5) + 32;
  tempFahrenheit.toFixed(1);
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
