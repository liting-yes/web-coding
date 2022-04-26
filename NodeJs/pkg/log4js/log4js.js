// 日志分级打印

const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = 'all';
logger.all('Some all msg');

logger.level = 'trace';
logger.trace('Some trace msg');

logger.level = 'debug';
logger.debug('Some debug msg');

logger.level = 'info';
logger.info('Some info msg');

logger.level = 'warn';
logger.warn('Some warn msg');

logger.level = 'error';
logger.debug('Some error msg');

logger.level = 'fatal';
logger.fatal('Some fatal msg');

logger.level = 'mark';
logger.mark('Some mark msg');

logger.level = 'off';
logger.off('Some off msg');