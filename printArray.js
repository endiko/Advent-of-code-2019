module.exports = arr => {
  //   console.clear();
  arr.forEach(line => {
    let s = '';
    line.forEach(el => {
      s += `${el} `;
    });
    console.log(s);
  });
};
