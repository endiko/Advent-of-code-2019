const fs = require('fs');

const day = '12'; // Change a day number to get the result

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
// console.log(part2(data, 5));

// Day 9
// console.log(part1(data, 1));
// console.log(part2(data, 2));

// Day 10
// const data = `.#..#
//         .....
//         #####
//         ....#
//         ...##`;

//  Day 12

// console.log(part1(data, 1000));

// const data = `<x=-1, y=0, z=2>
// <x=2, y=-10, z=-7>
// <x=4, y=-8, z=8>
// <x=3, y=5, z=-1>`;
console.log(part2(data));
