const crypto = require('crypto');

const hmac = crypto.createHmac('sha512','111');

hmac.update('abcde');
console.log(hmac.digest('hex'))