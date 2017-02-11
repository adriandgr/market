// test maxProfit.js

var assert = require('chai').assert;
var maxProfit = require('../lib/maxProfit');

describe('maxProfit()', function() {
  it('should return a number', function() {
    let data = [45, 24, 35, 31, 40, 38, 11];
    assert.typeOf(maxProfit(data), 'number');
  });
  it('should return the maximum profit', function() {
    let data = [45, 24, 35, 31, 40, 38, 11];
    assert.equal(maxProfit(data), 16);
  });
  it('should retun \'-1\' if the array contains wrong type data', function() {
    let data = [45, 24, 35, 31, '40y', 38, 11];
    assert.equal(maxProfit(data), -1);
  });
});


