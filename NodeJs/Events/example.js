// 简单使用 Events

const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

emitter.on('test', (time) => {
    console.log(`坚持早上${time}起床`);
})

emitter.emit('test', '8:00');