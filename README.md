# broccoli-css-mqpacker

[![NPM version](https://badge.fury.io/js/broccoli-css-mqpacker.svg)](http://badge.fury.io/js/broccoli-css-mqpacker)
[![Build Status](https://travis-ci.org/shinnn/broccoli-css-mqpacker.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-css-mqpacker)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-css-mqpacker.svg)](https://david-dm.org/shinnn/broccoli-css-mqpacker)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-css-mqpacker/dev-status.svg)](https://david-dm.org/shinnn/broccoli-css-mqpacker#info=devDependencies)

[CSS MQPacker](https://github.com/hail2u/node-css-mqpacker) filter for [Broccoli](https://github.com/joliss/broccoli)

## Installation

Install with [npm](https://www.npmjs.org/). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save-dev broccoli-css-mqpacker
```

## Example

```javascript
var packMediaQueries = require('broccoli-css-mqpacker');
tree = packMediaQueries(tree, options);
```

## API

### packMediaQueries(tree)

Currently this plugin doesn't support source map.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
