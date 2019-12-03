const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 3: Crossed Wires. Part 1:', () => {
  it(`The Manhattan distance from the central port to the closest interseption should return 6`, () => {
    const input = `R8,U5,L5,D3
                U7,R6,D4,L4`;
    assert.equal(part1(input), 6);
  });
  it(`The Manhattan distance from the central port to the closest intersection should return 159`, () => {
    const input = `R75,D30,R83,U83,L12,D49,R71,U7,L72
                U62,R66,U55,R34,D71,R55,D58,R83`;

    assert.equal(part1(input), 159);
  });
  it(`The Manhattan distance from the central port to the closest intersection should return 135`, () => {
    const input = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
    U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

    assert.equal(part1(input), 135);
  });
});

describe('Day 3: Crossed Wires. Part 2:', () => {
  it(`The Manhattan distance from the central port to the closest interseption should return 30`, () => {
    const input = `R8,U5,L5,D3
                U7,R6,D4,L4`;
    assert.equal(part2(input), 30);
  });
  it(`The Manhattan distance from the central port to the closest intersection should return 610`, () => {
    const input = `R75,D30,R83,U83,L12,D49,R71,U7,L72
                U62,R66,U55,R34,D71,R55,D58,R83`;

    assert.equal(part2(input), 610);
  });
  it(`The Manhattan distance from the central port to the closest intersection should return 410`, () => {
    const input = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
    U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

    assert.equal(part2(input), 410);
  });
});
