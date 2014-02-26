'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = fs.readFileSync('test/expected.css');

describe('broccoli-css-mqpacker', function () {
  it('should run css-mqpacker', function (done) {
    fs.readFile('test/actual/fixture.css', function(err, data) {
      assert.strictEqual(data.toString(), expected.toString());
      done();
    });
  });
});