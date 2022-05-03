"use strict";

// Cipher 加解密
// 加密
function cipher(str) {
  try {
    var crypto = require('crypto');

    var _cipher = crypto.createCipheriv('des-ecb', '12345678', '');

    var encrypted = _cipher.update(str, 'utf-8', 'hex');

    encrypted += _cipher["final"]('hex');
    return encrypted;
  } catch (e) {
    return e.message || e;
  }
}

console.log(cipher('hello crypto !')); // 解密

function decipher(encrypted) {
  try {
    var crypto = require('crypto');

    var _decipher = crypto.createDecipheriv('des-ecb', '12345678', '');

    var decrypted = _decipher.update(encrypted, 'hex', 'utf-8');

    decrypted += _decipher["final"]('utf-8');
    return decrypted;
  } catch (e) {
    return e.message || e;
  }
}

console.log(decipher(cipher('hello crypto !')));