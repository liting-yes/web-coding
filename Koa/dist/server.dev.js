"use strict";

var Koa = require('koa');

var path = require('path');

var fs = require('fs');

var Router = require('koa-router');

var app = new Koa();
var router = new Router();
var MIMES_MAP = {
  'html': 'text/html'
};
var staticPath = './static';

function parseMine(url) {
  var extName = path.extname(url);
  extName = extName ? extName.slice(1) : 'unknown';
  return MIMES_MAP[extName];
}

router.get('/cookie', function _callee(ctx) {
  var cookie;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cookie = ctx.cookies.get('id');
          ctx.body = "cookie\u4E3A".concat(cookie);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.use(router.routes());
app.use(function _callee2(ctx) {
  var fullStaticPath, conetnt, mine;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fullStaticPath = path.join(__dirname, staticPath);
          conetnt = fs.readFileSync(path.join(fullStaticPath, ctx.url), 'binary');
          mine = parseMine(ctx.url);

          if (mine) {
            ctx.type = mine;
          }

          ctx.cookies.set('id', '123456', {
            domain: '127.0.0.1',
            expires: new Date('2022-04-25'),
            httpOnly: false,
            overwrite: false
          });
          ctx.body = conetnt;

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.listen(4000, function () {
  return console.log('Server is running, port is 4000.');
});