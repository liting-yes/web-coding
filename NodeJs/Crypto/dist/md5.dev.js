"use strict";

var crypto = require('crypto');

var md5 = function md5(str) {
  return crypto.createHash('md5').update(str, 'utf-8');
};

console.log(md5('hello crypto !'));