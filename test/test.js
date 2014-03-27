'use strict';

var assert = require('assert');
var fs = require('fs');
var Q = require('q');

var readFile = Q.denodeify(fs.readFile);

describe('broccoli-css-mqpacker', function() {
  it('should run css-mqpacker', function() {
    return Q.all([
      readFile('test/actual/multiple_mediaqueries.css'),
      readFile('test/expected/multiple_mediaqueries.css'),
    ]).spread(function(actual, expected) {
      assert.strictEqual(actual.toString(), expected.toString());
    });
  });
});
