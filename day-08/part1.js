module.exports = inputData => {
  const imageData = [];
  const imageMap = [];

  for (let i = 0; i < inputData.length; i += 25) {
    let str = inputData.slice(i, i + 25);
    imageData.push(str);
  }

  for (let i = 0; i < imageData.length; i += 6) {
    let temp = [];
    for (let j = i; j < i + 6; j++) {
      temp.push(imageData[j]);
    }
    imageMap.push(temp);
  }

  let digitsMap = [];
  let minDigit0 = Number.MAX_SAFE_INTEGER;
  imageMap.filter(layer => {
    let layerDigitsMap = { '0': 0, '1': 0, '2': 0 };
    layer.forEach(item => {
      let i = 0;
      while (i < item.length) {
        if (item[i] === '0') {
          layerDigitsMap[item[i]] += 1;
        } else if (item[i] === '1') {
          layerDigitsMap[item[i]] += 1;
        } else if (item[i] === '2') {
          layerDigitsMap[item[i]] += 1;
        }
        i++;
      }
    });
    digitsMap.push([layerDigitsMap, layerDigitsMap['0']]);
    minDigit0 = Math.min(layerDigitsMap['0'], minDigit0);
  });

  let total = null;

  let filtered = digitsMap.filter(item => item[1] === minDigit0);

  total = filtered[0][0]['1'] * filtered[0][0]['2'];

  return total;
};
