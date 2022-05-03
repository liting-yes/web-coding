// 利用 child_process.fork 方法创建子进程

const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    let workerProcess = child_process.fork('command.js', [i]);

    workerProcess.on('close', (code) => {
        console.log('子进程已退出， 退出码 ' + code);
    })
}