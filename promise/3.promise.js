/**
 * 分步读取一个文件，每读到一段通知一下，读取成功调成功的回调
 * 失败调失败的回调
 */
var fs = require('fs');
var Promise = require('./Promise');
var promise = new Promise(function(resolve,reject){
    //一次读三个字节，触发一次data事件
    var rs = fs.createReadStream('./1.txt',{highWaterMark:3});
    rs.setEncoding('utf8');//设置编码的话data就成了字符串，否则是buffer
    var result = '';//累加每次读取的内容
    rs.on('data',function(data){
        result+=data;
    });
    rs.on('end',function(){//文件读完之后会触发end事件，成功的回调
        resolve(result);
    });
    rs.on('error',function(error){//文件读取过程中出错，调reject方法
        reject(error);
    });
});
promise.then(function(data){
    console.log(data);
},function(error){
    console.error(error);
});
