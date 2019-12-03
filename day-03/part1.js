const manhattanDistance = require('../manhattanDistance');
const filledWiresPath = require('./filledWiresPath');

module.exports = inputData => {
  const wiresPath = inputData
    .split('\n')
    .map(item => item.split(',').map(item => item.trim()));

  let minDinstanse = Number.MAX_SAFE_INTEGER;

  let x0 = 0;
  let y0 = 0;

  let filledGrid1 = filledWiresPath(wiresPath[0]);
  let filledGrid2 = filledWiresPath(wiresPath[1]);

  //   find intersection and calc min manhattanDistance to central port
  for (let point of filledGrid1.keys()) {
    if (filledGrid2.has(point)) {
      let [x, y] = point.split(',');
      minDinstanse = Math.min(manhattanDistance(x, y, x0, y0), minDinstanse);
    }
  }

  return minDinstanse;
};
