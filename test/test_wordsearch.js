const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present when word is horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present when word is vertically", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
      ['E', 'E', 'I', 'N', 'E', 'E', 'L', 'D'],
      ['J', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['K', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
      ['L', 'D', 'C', 'A', 'L', 'U', 'A', 'S'],
      ['D', 'D', 'C', 'A', 'D', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the letters are empty", function() {
    const result = wordSearch([], 'SEINFELD')

    assert.isFalse(result.length === 0);
  });
});
