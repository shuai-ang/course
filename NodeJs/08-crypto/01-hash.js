const crypto = require('crypto');

//md5 =>不可逆
// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha256');
const hash = crypto.createHash('sha512');

hash.update('abcde');
console.log(hash.digest('hex'))