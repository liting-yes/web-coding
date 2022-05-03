// 创建子进程文件中的子进程执行文件

console.log(`pid: ${ process.pid }, 进程${ process.argv[2] } 的stdout`);
console.error(`pid: ${ process.pid }, 进程${ process.argv[2] } 的stderr`);