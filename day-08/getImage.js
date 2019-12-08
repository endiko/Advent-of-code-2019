module.exports = str => {
  const imageData = [];
  const imageLayersMap = [];

  for (let i = 0; i < str.length; i += 25) {
    imageData.push(str.slice(i, i + 25));
  }

  for (let i = 0; i < imageData.length; i += 6) {
    let temp = [];
    for (let j = i; j < i + 6; j++) {
      temp.push(imageData[j]);
    }
    imageLayersMap.push(temp);
  }

  return imageLayersMap;
};
