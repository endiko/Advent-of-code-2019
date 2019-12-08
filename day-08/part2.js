const color = require('colors');

module.exports = inputData => {
  const imageData = [];
  const imageLayersMap = [];

  for (let i = 0; i < inputData.length; i += 25) {
    imageData.push(inputData.slice(i, i + 25));
  }

  for (let i = 0; i < imageData.length; i += 6) {
    let temp = [];
    for (let j = i; j < i + 6; j++) {
      temp.push(imageData[j]);
    }
    imageLayersMap.push(temp);
  }

  let decodingImage = Array(6)
    .fill('')
    .map(() => Array(25).fill('.'));

  let temp = [];
  let l = 0;

  while (l < 6) {
    let s = 0;
    while (s < 25) {
      let str = '.';
      for (let i = 0; i < imageLayersMap.length; i++) {
        let layer = imageLayersMap[i];

        if (layer[l][s] === '0') {
          str = '*';
          break;
        } else if (layer[l][s] === '1') {
          str = '#';
          break;
        }
      }
      decodingImage[l][s] = str;
      s++;
    }
    l++;
  }

  function print(arr) {
    arr.forEach(line => {
      let s = '';
      line.forEach(el => {
        if (el === '*') {
          s += `${el.brightRed}`;
        } else if (el === '#') {
          s += `${el.brightGreen}`;
        } else {
          s += `${el} `;
        }
      });
      console.log(s.white);
    });
  }

  return print(decodingImage);
};
