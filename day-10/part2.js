const asteroidWithNewMonitoringStation = require('./part1');
const print = require('../printArray');

module.exports = inputData => {
  const asteroids = inputData.split('\n').map(str => str.trim().split(''));
  //   print(asteroids);
  const { x, y } = asteroidWithNewMonitoringStation(inputData)[0];
  //   console.log(x0, y0);

  let anglesMap = new Map();
  const x0 = x,
    y0 = y;

  const getDegreeAngle = (y, x) => (Math.atan2(y, x) * 180) / Math.PI;

  for (let y2 = 0; y2 < asteroids.length; y2++) {
    for (let x2 = 0; x2 < asteroids[0].length; x2++) {
      if (y0 !== y2 || x0 !== x2) {
        if (asteroids[y2][x2] === '#') {
          dx = x2 - x0;
          dy = y2 - y0;
          let degreeAngle = getDegreeAngle(dy, dx);
          let distance = Math.hypot(dy, dx);

          if (anglesMap.has(degreeAngle)) {
            anglesMap.get(degreeAngle).push([distance, { y: y2, x: x2 }]);
          } else {
            anglesMap.set(degreeAngle, [[distance, { y: y2, x: x2 }]]);
          }
        }
      }
    }
  }

  let startMap = anglesMap
    .get(-90)
    .reverse()
    .shift()[0];

  // let minDistance = Number.MAX_SAFE_INTEGER;
  // let minDistanceCoords = {};

  // for (let [degree, key] of anglesMap) {
  //   if (degree == 90) {
  //   }
  // }

  console.log(anglesMap);
};
