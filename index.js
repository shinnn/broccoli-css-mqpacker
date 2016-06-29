'use strict';

var Filter = require('broccoli-filter');
var csspacker = require('css-mqpacker');

function MQPackerFilter(inputTree, options) {
  if (!(this instanceof MQPackerFilter)) {
    return new MQPackerFilter(inputTree, options);
  }

  Filter.call(this, inputTree, options);

  this.options = options || {};
}

MQPackerFilter.prototype = Object.create(Filter.prototype);
MQPackerFilter.prototype.constructor = MQPackerFilter;

MQPackerFilter.prototype.extensions = ['css'];
MQPackerFilter.prototype.targetExtension = 'css';

MQPackerFilter.prototype.processString = function(str) {
  return csspacker.pack(str, this.options).css;
};

module.exports = MQPackerFilter;
