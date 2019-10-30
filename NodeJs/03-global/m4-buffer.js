//Buffer是用来存放二进制数据的容器
//控制台中输出的buffer,一个数字或者字母代表两个十六进制数
//一个二进制的0 或者 1 代表了 1bit(位)
//8bit(位) = 1B(字节) = 2个16进制数
//1 个英文字符 = 1B ，1个汉字 = 3B
const buf1 = Buffer.from('z');
console.log(buf1)

const buf2 = Buffer.from('帅');
console.log(buf2)//<Buffer e5 b8 85>

const buf3 = Buffer.alloc(3);

buf3[0] = 0xe5;
buf3[1] = 0xb8;
buf3[2] = 0x85;
console.log(buf3.toString())

const buf4 = Buffer.alloc(10);
buf4[0] = 0x85;
buf4[1] = 88;
buf4[9] = 0xb8;
console.log(buf4)