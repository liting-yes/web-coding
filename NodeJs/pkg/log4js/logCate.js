// 日志按文件分类处理

const log4js = require('log4js');

log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app1: { type: 'file', filename: 'app1.log' },
        app2: { type: 'file', filename: 'app2.log' }
    },
    categories: {
        default: { appenders: ['out'], level: 'trace' },
        app1: { appenders: ['app1'], level: 'trace' },
        app2: { appenders: ['app2'], level: 'info' }
    }
})

const logger = log4js.getLogger();
logger.trace('default category and go to stdout');

const app1Log = log4js.getLogger('app1');
app1Log.trace('app1 log');

const app2Log = log4js.getLogger('app2');
app2Log.info('app2 log');