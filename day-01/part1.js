const getFuelRequirement = require('./getFuelRequirement');

module.exports = inputData => {
  return inputData
    .split('\n')
    .map(str => parseInt(str))
    .reduce((acc, value) => acc + getFuelRequirement(value), 0);
};
