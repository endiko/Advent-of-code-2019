const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('--- Day 6: Universal Orbit Map --- Part 1:', () => {
  it('The total number of direct and indirect orbits should return 42', () => {
    const data = `COM)B
    B)C
    C)D
    D)E
    E)F
    B)G
    G)H
    D)I
    E)J
    J)K
    K)L`;
    assert.equal(part1(data), 42);
  });
});

describe('--- Day 6: Universal Orbit Map --- Part 2:', () => {
  it('The minimum number of orbital transfers should return 4', () => {
    const data = `COM)B
      B)C
      C)D
      D)E
      E)F
      B)G
      G)H
      D)I
      E)J
      J)K
      K)L
      K)YOU
      I)SAN`;
    assert.equal(part2(data), 4);
  });
});
