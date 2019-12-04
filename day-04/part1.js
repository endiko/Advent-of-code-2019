// Checking if there are 2 the same adjacent digits and the digits never decrease
const checkingMeetCriteria = number => {
  let str = number.toString();
  let isRepeat = false;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) return false;
    if (str[i] === str[i + 1]) isRepeat = true;
  }

  return isRepeat;
};

module.exports = inputData => {
  const range = inputData.split('-').map(str => parseInt(str));

  const [start, end] = range;
  let counter = 0;

  for (let i = start + 1; i < end; i++) {
    if (checkingMeetCriteria(i)) counter++;
  }
  return counter;
};
