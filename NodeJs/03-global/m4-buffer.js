//Buffer是用来存放二进制数据的容器
const buf1 = Buffer.from('z');
console.log(buf1)

const buf2 = Buffer.from('帅');
console.log(buf2)//<Buffer e5 b8 85>

const buf3 = Buffer.alloc(3);

buf3[0] = 0xe5;
buf3[1] = 0xb8;
buf3[2] = 0x85;
console.log(buf3.toString())