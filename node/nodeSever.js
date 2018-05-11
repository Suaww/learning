var http = require('http')
var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'json'})
    res.end('hello world')
}).listen(8080)

event.on('myEvent', function() {
    console.log('event被触发了')
})
setTimeout(function() {
    event.emit('myEvent')
}, 1000)
const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString('ascii'));

const buf2 = Buffer.alloc(26, 97);
console.log(buf2.toString('ascii'), '读取buf2');
for (var i = 0 ; i < 26 ; i++) {
    buf2[i] = i + 97;
}
console.log(buf2.toString('ascii'), '再次读取buf2');

const buf3 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf3);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);


var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('file.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");