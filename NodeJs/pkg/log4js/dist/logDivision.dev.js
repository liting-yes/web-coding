"use strict";

var log4js = require('log4js');

log4js.configure({
  appenders: {
    app: {
      type: 'dateFile',
      filename: 'app',
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd-hh.log'
    }
  },
  categories: {
    "default": {
      appenders: ['app'],
      level: 'trace'
    },
    app: {
      appenders: ['app'],
      level: 'trace'
    }
  }
});
var appLog = log4js.getLogger('app');
appLog.trace('go to file');