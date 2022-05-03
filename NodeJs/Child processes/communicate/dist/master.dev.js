"use strict";

// 进程通信 主进程
// 原理：共享内存
var cp = require('child_process');

var n = cp.fork('child.js');
n.on('message', function (msg) {
  return console.log('主进程收到子进程消息：', msg);
});
n.send('hello child process !');