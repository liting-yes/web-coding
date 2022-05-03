"use strict";

// 简单使用 Events
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.on('test', function (time) {
  console.log("\u575A\u6301\u65E9\u4E0A".concat(time, "\u8D77\u5E8A"));
});
emitter.emit('test', '8:00');