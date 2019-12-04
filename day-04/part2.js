// Checking if there are 2 the same adjacent digits and the digits never decrease
const checkingMeetCriteria = number => {
  let str = number.toString();
  let map = new Map();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) return false;
    if (str[i] === str[i + 1]) {
      let key = str[i];
      if (map.has(key)) {
        let value = map.get(key);
        map.set(key, ++value);
      } else {
        map.set(key, 2);
      }
    }
  }

  if (map.size === 0) return false;

  for (let counter of map.values()) {
    if (counter === 2) return true;
  }

  return false;
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
