// 通信进程 子进程
console.log(1)

const net = require('net');
const pipe = net.Socket({ fd: 1 });
pipe.write('hello master process !');
