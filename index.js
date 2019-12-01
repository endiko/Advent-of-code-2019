const fs = require('fs');

const day = '01';
const path = `./day-${day}`;

const part1 = require(`${path}/part1`);
const part2 = require(`${path}/part2`);

const data = fs.readFileSync(`${path}/input.txt`, 'utf8');

console.log(part1(data), part2(data));
