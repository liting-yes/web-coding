"use strict";

// 创建 Buffer
// Buffer.from
var a = Buffer.from('10');
console.log(a); // Buffer.alloc

var b = Buffer.alloc(10);
console.log(b); // Buffer.allocUnsafe

var c = Buffer.allocUnsafe(8);
console.log(c);