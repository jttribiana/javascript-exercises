const convertToCelsius = function(far) {
    let cel = (far - 32) * 5/9;
    let celRounded = Number(cel.toFixed (1));
    return celRounded
};

const convertToFahrenheit = function(celValue) {
  let farValue = (9/5) * celValue + 32;
    let farRounded = Number(farValue.toFixed (1));
    return farRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
