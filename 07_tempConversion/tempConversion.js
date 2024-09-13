const convertToCelsius = function(temp) {
  // x Fahrenheit = (x -32) * 5/9 Celsius

  let tempCelsius = (temp - 32) * 5 / 9;
  tempCelsius =  Math.round(tempCelsius*10)/10;
  return tempCelsius

};

const convertToFahrenheit = function(temp) {
  let tempFahrenheit = (temp * 9/5) + 32;
  tempFahrenheit =  Math.round(tempFahrenheit*10)/10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
