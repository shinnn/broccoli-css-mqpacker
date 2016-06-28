'use strict';

var assert = require('assert');
var fs = require('fs');
var Q = require('q');
var css = require('css');

var readFile = Q.denodeify(fs.readFile);

function normalizeCSS(content) {
  return css.stringify(
    css.parse(content)
  );
}

describe('broccoli-css-mqpacker', function() {
  it('should run css-mqpacker', function() {
    return Q.all([
      readFile('test/actual/multiple_mediaqueries.css'),
      readFile('test/expected/multiple_mediaqueries.css'),
    ]).spread(function(actual, expected) {
      actual = normalizeCSS(actual.toString());
      expected = normalizeCSS(expected.toString());
      assert.strictEqual(actual, expected);
    });
  });
});
