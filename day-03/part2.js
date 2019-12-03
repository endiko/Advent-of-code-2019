const filledWiresPath = wire => {
  let filledGrid = new Map();
  let xw = 0,
    yw = 0;
  let i = 0;
  let distanse = 0;
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
      distanse++;

      filledGrid.set(`${xw},${yw}`, distanse);
    }

    i++;
  }

  return filledGrid;
};

module.exports = inputData => {
  const wiresPath = inputData
    .split('\n')
    .map(item => item.split(',').map(item => item.trim()));

  let minDinstanse = Number.MAX_SAFE_INTEGER;

  let filledGrid1 = filledWiresPath(wiresPath[0]);
  let filledGrid2 = filledWiresPath(wiresPath[1]);

  let intersections = new Set();

  filledGrid1.forEach((distanse, point) => {
    if (filledGrid2.has(point)) {
      minDinstanse = Math.min(distanse + filledGrid2.get(point), minDinstanse);
    }
  });

  return minDinstanse;
};
