module.exports = inputData => {
  const intCode = inputData.split(',').map(str => parseInt(str));

  //  Comment these 2 lines below when running test
  intCode[1] = 12;
  intCode[2] = 2;
  // Comment these 2 lines above when running test

  for (let i = 0; i < intCode.length - 3; i += 4) {
    let startPosition = intCode[i];
    let firstPosition = intCode[i + 1];
    let secondPosition = intCode[i + 2];
    let resultPosition = intCode[i + 3];

    if (startPosition === 1) {
      intCode[resultPosition] =
        intCode[firstPosition] + intCode[secondPosition];
    } else if (startPosition === 2) {
      intCode[resultPosition] =
        intCode[firstPosition] * intCode[secondPosition];
    } else if (startPosition === 99) break;
  }

  return intCode[0];
};
