// 利用 child_process.exec 方法创建子进程

const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    let workerProcess = child_process.exec('node command.js', { pid: i }, (error, stdout, stderr) => {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }

        console.log('stdout: ' + stdout);
        console.log('stdout: ' + stderr);
    });

    workerProcess.on('exit', (code) => {
        console.log('子进程已退出，退出码 ' + code);
    })
}