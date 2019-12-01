const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 1: The Tyranny of the Rocket Equation. Part 1:', () => {
  it('For a mass of 12, should return 2', () => {
    assert.equal(part1('12'), 2);
  });
  it('For a mass of 14 should return 2.', () => {
    assert.equal(part1('14'), 2);
  });
  it('For a mass of 1969 should return 654', () => {
    assert.equal(part1('1969'), 654);
  });
  it('For a mass of 100756 should return 33583', () => {
    assert.equal(part1('100756'), 33583);
  });
});

describe('Day 1: The Tyranny of the Rocket Equation. Part 2:', () => {
  it('For a mass of 12 should return 2', () => {
    assert.equal(part2('12'), 2);
  });
  it('For a mass of 14 should return 2.', () => {
    assert.equal(part2('14'), 2);
  });
  it('For a mass of 1969 should return 966', () => {
    assert.equal(part2('1969'), 966);
  });
  it('For a mass of 100756 should return 50346', () => {
    assert.equal(part2('100756'), 50346);
  });
});
