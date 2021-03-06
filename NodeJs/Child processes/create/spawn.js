// 利用 child_process.spwan 方法创建子进程

const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    let workerProcess = child_process.spawn('node', ['command.js', i]);
    workerProcess.stdout.on('data', (data) => {
        console.log('stdout: ' + data);
    });
    workerProcess.stderr.on('data', (data) => {
        console.log('stderr: ' + data);
    });
    workerProcess.on('close', (code) => {
        console.log('子进程已退出，退出码 '  + code);
    })
}