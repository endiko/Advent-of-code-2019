const filledWiresPath = require('./filledWiresPath');

module.exports = inputData => {
  const wiresPath = inputData
    .split('\n')
    .map(item => item.split(',').map(item => item.trim()));

  let minDinstanse = Number.MAX_SAFE_INTEGER;

  let filledGrid1 = filledWiresPath(wiresPath[0]);
  let filledGrid2 = filledWiresPath(wiresPath[1]);

  filledGrid1.forEach((distanse, point) => {
    if (filledGrid2.has(point)) {
      minDinstanse = Math.min(distanse + filledGrid2.get(point), minDinstanse);
    }
  });

  return minDinstanse;
};
