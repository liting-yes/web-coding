"use strict";

// 进程通信 子进程
process.on('message', function (msg) {
  console.log('子进程收到主进程发送的消息：', msg);
});
process.send('hello master process!');