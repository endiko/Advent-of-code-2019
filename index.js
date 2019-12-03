const fs = require('fs');

const day = '03'; // Change a day number to get the result

const path = `./day-${day}`;

const part1 = require(`${path}/part1`);
const part2 = require(`${path}/part2`);

const data = fs.readFileSync(`${path}/input.txt`, 'utf8');

console.log(part1(data));

// Day 2 part 2
// console.log(part2(data, 19690720));
