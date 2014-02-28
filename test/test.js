'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = fs.readFileSync('test/expected/multiple_mediaqueries.css');

describe('broccoli-css-mqpacker', function () {
  it('should run css-mqpacker', function (done) {
    fs.readFile('test/actual/multiple_mediaqueries.css', function(err, data) {
      if (err) done(err);
      assert.strictEqual(data.toString(), expected.toString());
      done();
    });
  });
});