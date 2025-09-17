const crypto = require('crypto');
const password = 'MyScreatePasswordisJayShreeRam'
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log(hash);