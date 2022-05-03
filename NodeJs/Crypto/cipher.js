// Cipher 加解密

// 加密
function cipher (str) {
    try {
        const crypto = require('crypto');
        const cipher = crypto.createCipheriv('des-ecb', '12345678', '');

        let encrypted = cipher.update(str, 'utf-8', 'hex');
        encrypted += cipher.final('hex');

        return encrypted;
    }   catch (e) {
        return e.message || e;
    }
}

console.log(cipher('hello crypto !'));

// 解密
function decipher (encrypted) {
    try {
        const crypto = require('crypto');
        const decipher = crypto.createDecipheriv('des-ecb', '12345678', '');

        let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');

        return decrypted;
    }   catch (e) {
        return e.message || e;
    }
}

console.log(decipher(cipher('hello crypto !')));