// test maxProfit.js

var assert = require('chai').assert;
var maxProfit = require('../lib/maxProfit');

describe('maxProfit()', function() {
  it('should return a boolean', function() {
    let good = 8532;
    assert.typeOf(maxProfit(good), 'boolean');
  });
});


