// 进程通信 主进程
// 原理：共享内存

const cp = require('child_process');
const n = cp.fork('child.js');

n.on('message', msg => console.log('主进程收到子进程消息：', msg));

n.send('hello child process !');