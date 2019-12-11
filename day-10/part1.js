const print = require('../printArray');

module.exports = inputData => {
  const asteroids = inputData.split('\n').map(str => str.trim().split(''));

  print(asteroids);

  let asteroidsMap = [];
  let maxAmount = Number.MIN_SAFE_INTEGER;

  for (let y1 = 0; y1 < asteroids.length; y1++) {
    for (let x1 = 0; x1 < asteroids[0].length; x1++) {
      if (asteroids[y1][x1] === '#') {
        let angles = new Set();
        let dx = null;
        let dy = null;
        for (let y2 = 0; y2 < asteroids.length; y2++) {
          for (let x2 = 0; x2 < asteroids[0].length; x2++) {
            if (y1 !== y2 || x1 !== x2) {
              if (asteroids[y2][x2] === '#') {
                //  use angles and calc arctangent Math.atan2
                dx = x2 - x1;
                dy = y2 - y1;
                angles.add(Math.atan2(dy, dx));
              }
            }
          }
        }
        maxAmount = Math.max(angles.size, maxAmount);
        asteroidsMap.push([{ y: y1, x: x1 }, angles.size]);
      }
    }
  }

  return asteroidsMap.filter(asteroid => asteroid.includes(maxAmount))[0];
};
