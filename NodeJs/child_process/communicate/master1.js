// 进程通信 主进程

const { spawn } = require('child_process');

const child = spawn('node', ['child1.js', 1], {
    stdio: [null, null, null, 'pipe']
});

child.stdio[1].on('data', data => {
    console.log(`来自子进程的消息 ${ data.toString() }`);
});
