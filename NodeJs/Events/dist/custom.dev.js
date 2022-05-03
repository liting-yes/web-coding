"use strict";

// 基于 EventEmitter 的自定义类
// 用 class & extends 感觉会更好
var EventEmitter = require('events');

var oneDayPlanRun = {
  '6:00': function _() {
    console.log('早起！');
  },
  '7:00': function _() {
    console.log('吃早餐！');
  }
};

function OneDayPlan() {
  EventEmitter.call(this);
}

Object.setPrototypeOf(OneDayPlan.prototype, EventEmitter.prototype);
Object.setPrototypeOf(OneDayPlan, EventEmitter);
var oneDayPlan = new OneDayPlan();
oneDayPlan.on('6:00', function () {
  return oneDayPlanRun['6:00']();
});
oneDayPlan.on('7:00', function () {
  return oneDayPlanRun['7:00']();
});

function doMain() {
  return regeneratorRuntime.async(function doMain$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          oneDayPlan.emit('6:00');
          _context.next = 3;
          return regeneratorRuntime.awrap(sleep(2000));

        case 3:
          oneDayPlan.emit('7:00');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

doMain();

function sleep(time) {
  return regeneratorRuntime.async(function sleep$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve) {
            setTimeout(function () {
              return resolve(1);
            }, time);
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}