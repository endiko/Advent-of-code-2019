module.exports = (inputData, N) => {
  const data = inputData.split('\n').map(line =>
    line
      .trim()
      .slice(1, line.length - 1)
      .split(', ')
      .map(str => +str.replace(/\w=/, ''))
  );

  let moons = [...data];

  const calcMoonPosition = (currentPosition, velocity) => {
    return currentPosition.map((coordPosition, index) => {
      return (currentPosition[index] += velocity[index]);
    });
  };

  //   let moonsMap = new Map();
  //   moons.forEach(moon => {
  //     moonsMap.set(moon, [0, 0, 0])
  //   });

  let moonsVelocities = Array(moons.length)
    .fill('')
    .map(() => Array(3).fill(0));
  let moonsMap = [];

  let step = 0;

  while (step < N) {
    let i = 0,
      j = 0;
    let tempMoon = [],
      tempVelocity = [];
    moonsMap = [];
    while (i < moons.length) {
      let moon = [...moons[i]];
      let velocity = [...moonsVelocities[i]];

      j = 0;
      while (j < moons.length) {
        if (i !== j) {
          velocity.forEach((position, index) => {
            if (moon[index] < moons[j][index]) {
              velocity[index]++;
            } else if (moon[index] > moons[j][index]) {
              velocity[index]--;
            }
          });
        }
        j++;
      }
      let temp = calcMoonPosition(moon, velocity);

      tempMoon.push(temp);
      tempVelocity.push(velocity);
      moonsMap.push([[...temp], [...velocity]]);
      i++;
    }
    moons = [...tempMoon];
    moonsVelocities = [...tempVelocity];
    // moonsMap.push([...moons], [...moonsVelocities]);
    step++;
  }
  const calcEnergy = arr =>
    arr.reduce((acc, val) => {
      return (acc += Math.abs(val));
    }, 0);

  return moonsMap.reduce((acc, moon) => {
    return (acc += calcEnergy(moon[0]) * calcEnergy(moon[1]));
  }, 0);
};
