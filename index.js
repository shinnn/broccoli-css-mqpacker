'use strict';

var Filter = require('broccoli-filter');
var packMediaQueries = require('css-mqpacker').pack;

function MQPackerFilter(inputTree, options) {
  if (!(this instanceof MQPackerFilter)) {
    return new MQPackerFilter(inputTree, options);
  }
  
  this.inputTree = inputTree;
  this.options = options || {};
}

MQPackerFilter.prototype = Object.create(Filter.prototype);
MQPackerFilter.prototype.constructor = MQPackerFilter;

MQPackerFilter.prototype.extensions = ['css'];
MQPackerFilter.prototype.targetExtension = 'css';

MQPackerFilter.prototype.processString = function(str) {
  return packMediaQueries(str, this.options).css;
};

module.exports = MQPackerFilter;