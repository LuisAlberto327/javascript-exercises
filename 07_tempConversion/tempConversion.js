const convertToCelsius = function(farenheit) {
  return +(((farenheit-32)/(9/5)).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return +(((celsius)*(9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
