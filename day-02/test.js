const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 2: 1202 Program Alarm. Part 1:', () => {
  it('The program 1,9,10,3,2,3,11,0,99,30,40,50 shoud return 3500', () => {
    assert.equal(part1('1,9,10,3,2,3,11,0,99,30,40,50'), 3500);
  });
});
