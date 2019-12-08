const colors = require('colors');
const getImageData = require('./getImage');

const colorPrinting = arr => {
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
    console.log(s);
  });
};

module.exports = inputData => {
  const imageLayersMap = getImageData(inputData);

  let decodingImage = Array(6)
    .fill('')
    .map(() => Array(25).fill('.'));

  let layer = 0;
  while (layer < 6) {
    let line = 0;
    while (line < 25) {
      let str = '.';
      for (let i = 0; i < imageLayersMap.length; i++) {
        if (imageLayersMap[i][layer][line] === '0') {
          str = '*';
          break;
        } else if (imageLayersMap[i][layer][line] === '1') {
          str = '#';
          break;
        }
      }
      decodingImage[layer][line] = str;
      line++;
    }
    layer++;
  }

  return colorPrinting(decodingImage);
};
