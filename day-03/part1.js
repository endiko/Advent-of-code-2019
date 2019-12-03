const manhattanDistance = require('../manhattanDistance');

module.exports = inputData => {
  const wiresPath = inputData
    .split('\n')
    .map(item => item.split(',').map(item => item.trim()));

  let minDinstanse = Number.MAX_SAFE_INTEGER;

  let x0 = 0;
  let y0 = 0;

  const filledWiresPath = wire => {
    let filledGrid = new Set();
    let xw = x0,
      yw = y0;
    let i = 0;
    while (i < wire.length) {
      let direction = wire[i][0];
      let stepsAmount = parseInt(wire[i].slice(1));
      let dx = 0,
        dy = 0;

      for (let step = 0; step < stepsAmount; step++) {
        /* wire's path directions: 'R' - right, 'L' - left, 'U' - up, 'D' - down    */
        switch (direction) {
          case 'R': {
            dx = 1;
            break;
          }
          case 'L': {
            dx = -1;
            break;
          }
          case 'U': {
            dy = 1;
            break;
          }
          case 'D': {
            dy = -1;
          }
        }
        xw += dx;
        yw += dy;

        filledGrid.add(`${xw},${yw}`);
      }

      i++;
    }

    return filledGrid;
  };

  let filledGrid1 = filledWiresPath(wiresPath[0]);
  let filledGrid2 = filledWiresPath(wiresPath[1]);

  //   find intersection and calc min manhattanDistance to central port
  filledGrid1.forEach(point => {
    if (filledGrid2.has(point)) {
      let [x, y] = point.split(',');
      minDinstanse = Math.min(manhattanDistance(x, y, x0, y0), minDinstanse);
    }
  });
  return minDinstanse;
};
