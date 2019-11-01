const fs = require('fs');

const ws = fs.createWriteStream('./04.ws.txt',{flags:'w',encoding:'utf-8'})