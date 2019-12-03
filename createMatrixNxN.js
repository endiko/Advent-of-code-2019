// create matrix NxN

module.exports = n =>
  Array(n)
    .fill('')
    .map(() => Array(n).fill('.'));
