"use strict";

// 进程通信 主进程
var _require = require('child_process'),
    spawn = _require.spawn;

var child = spawn('node', ['child1.js', 1], {
  stdio: [null, null, null, 'pipe']
});
child.stdio[1].on('data', function (data) {
  console.log("\u6765\u81EA\u5B50\u8FDB\u7A0B\u7684\u6D88\u606F ".concat(data.toString()));
});