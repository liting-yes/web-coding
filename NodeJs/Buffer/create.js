// 创建 Buffer

// Buffer.from
const a = Buffer.from('10');
console.log(a);

// Buffer.alloc
const b = Buffer.alloc(10);
console.log(b);

// Buffer.allocUnsafe
const c = Buffer.allocUnsafe(8);
console.log(c);