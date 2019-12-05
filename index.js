const fs = require('fs');

const day = '05'; // Change a day number to get the result

const path = `./day-${day}`;

const part1 = require(`${path}/part1`);
const part2 = require(`${path}/part2`);

const data = fs.readFileSync(`${path}/input.txt`, 'utf8');

// console.log(part1(data));
// console.log(part2(data));

// Day 2 part 2
// console.log(part2(data, 19690720));

// Day 4 part 1
// console.log(part1('158126-624574'));
// console.log(part2('158126-624574'));

// Day 5
// console.log(part1(data, 1));
console.log(part2(data, 5));
