module.exports = inputData => {
  const data = inputData.split('\n').map(line =>
    line
      .trim()
      .slice(1, line.length - 1)
      .split(', ')
      .map(str => +str.replace(/\w=/, ''))
  );

  let moons = [...data];

  const getAxiosHash = (arr, pos) => {
    return arr.reduce((str, val) => {
      str += val[pos];
      return str;
    }, '');
  };

  let initialHashX = getAxiosHash(moons, 0);
  let initialHashY = getAxiosHash(moons, 1);
  let initialHashZ = getAxiosHash(moons, 2);

  // let initialHash = new Set();
  // moons.forEach(item => initialHash.add(item.join('')));

  // let getCashSum = arr => {
  //   return arr.reduce((str, item) => {
  //     str += item.join('');
  //     return str;
  //   }, '');
  // };

  const calcMoonPosition = (currentPosition, velocity) => {
    return currentPosition.map((coordPosition, index) => {
      return (currentPosition[index] += velocity[index]);
    });
  };

  let moonsVelocities = Array(moons.length)
    .fill('')
    .map(() => Array(3).fill(0));

  const findSteps = (initHash, pos) => {
    let moons = [...data];
    let velocities = [...moonsVelocities];
    let steps = 0;
    while (true) {
      let i = 0,
        j = 0;
      let tempMoon = [],
        tempVelocity = [];
      while (i < moons.length) {
        let moonAxis = moons[i][pos];
        let velocityAxis = velocities[i][pos];
        j = 0;
        while (j < moons.length) {
          if (i != j) {
            if (moons[j][pos] > moonAxis) {
              velocityAxis++;
            } else if (moons[j][pos] < moonAxis) {
              velocityAxis--;
            }
          }
          j++;
        }
        let temp = moonAxis + velocityAxis;

        tempMoon.push(temp);
        tempVelocity.push(velocityAxis);
        i++;

        // j = 0;
        // while (j < moons.length) {
        //   if (i !== j) {
        //     velocity.forEach((position, index) => {
        //       if (moon[index] < moons[j][index]) {
        //         velocity[index]++;
        //       } else if (moon[index] > moons[j][index]) {
        //         velocity[index]--;
        //       }
        //     });
        //   }
        //   j++;
        // }
        // let temp = calcMoonPosition(moon, velocity);

        // tempMoon.push(temp);
        // tempVelocity.push(velocity);
        // i++;
      }
      moons = [...tempMoon];
      moonsVelocities = [...tempVelocity];

      // let currentHashX = getAxiosHash(tempMoon, 0);
      // let currentHashY = getAxiosHash(tempMoon, 1);
      // let currentHashZ = getAxiosHash(tempMoon, 2);

      let currentHash = getAxiosHash(tempMoon, pos);

      if (currentHash === initHash) steps++;
    }

    return steps;
  };

  return hashTable;
};
