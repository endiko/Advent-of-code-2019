const getFuelRequirement = require('./getFuelRequirement');

module.exports = inputData => {
  return inputData
    .split('\n')
    .map(str => parseInt(str))
    .map(value => {
      let remainValue = value;
      let totalSum = 0;

      while (remainValue > 0) {
        let fuel = getFuelRequirement(remainValue);

        if (fuel <= 0) return totalSum;

        totalSum += fuel;
        remainValue = fuel;
      }

      return totalSum;
    })
    .reduce((acc, value) => acc + value, 0);
};
