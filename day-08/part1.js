const getImageData = require('./getImage');

module.exports = inputData => {
  const imageLayersMap = getImageData(inputData);

  let digitsMap = new Map();
  let minDigitOfZero = Number.MAX_SAFE_INTEGER;

  imageLayersMap.filter(layer => {
    let layerDigitsCounterMap = { '0': 0, '1': 0, '2': 0 };
    layer.forEach(item => {
      let i = 0;
      while (i < item.length) {
        switch (item[i]) {
          case '0': {
            layerDigitsCounterMap[item[i]] += 1;
            break;
          }
          case '1': {
            layerDigitsCounterMap[item[i]] += 1;
            break;
          }
          case '2': {
            layerDigitsCounterMap[item[i]] += 1;
            break;
          }
        }
        i++;
      }
    });
    digitsMap.set(layerDigitsCounterMap, layerDigitsCounterMap['0']);
    minDigitOfZero = Math.min(layerDigitsCounterMap['0'], minDigitOfZero);
  });

  for (let [key, value] of digitsMap) {
    if (value === minDigitOfZero) {
      return key['1'] * key['2'];
    }
  }
};
