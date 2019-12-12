const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('--- Day 12: The N-Body Problem --- Part 1:', () => {
  it('Sum of total energy after 10 steps: 36 + 45 + 80 + 18 = 179', () => {
    const data = `<x=-1, y=0, z=2>
<x=2, y=-10, z=-7>
<x=4, y=-8, z=8>
<x=3, y=5, z=-1>`;
    assert.equal(part1(data, 10), 179);
  });
  it('Sum of total energy after 100 steps: 290 + 608 + 574 + 468 = 1940', () => {
    const data = `<x=-8, y=-10, z=0>
<x=5, y=5, z=10>
<x=2, y=-7, z=3>
<x=9, y=-8, z=-3>`;
    assert.equal(part1(data, 100), 1940);
  });
});
