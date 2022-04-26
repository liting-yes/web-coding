"use strict";

// 通信进程 子进程
console.log(1);

var net = require('net');

var pipe = net.Socket({
  fd: 1
});
pipe.write('hello master process !');