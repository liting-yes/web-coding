const crypto = require('crypto');
const md5 = str => crypto.createHash('md5').update(str, 'utf-8');

console.log(md5('hello crypto !'));