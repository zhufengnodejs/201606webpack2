/**
 * 分步读取一个文件，每读到一段通知一下，读取成功调成功的回调
 * 失败调失败的回调
 */
var fs = require('fs');
var Promise = require('./Promise');
var promise = new Promise(function(resolve,reject,notify){
    //一次读三个字节，触发一次data事件
    var rs = fs.createReadStream('./1.txt',{highWaterMark:3});
    rs.setEncoding('utf8');//设置编码的话data就成了字符串，否则是buffer
    var result = '';//累加每次读取的内容
    rs.on('data',function(data){
        //当有进展的时候，也就是读取一部分数据的时候会调用notify进行通知
        notify(data);
        result+=data;//累加每次读到的内容
    });
    rs.on('end',function(){//文件读完之后会触发end事件，成功的回调
        resolve(result);
    });
    rs.on('error',function(error){//文件读取过程中出错，调reject方法
        reject(error);
    });
});
//成功回调 失败回调 进展回调
promise.then(function(data){
    console.log(data);
},function(error){
    console.error(error);
},function(data){
    console.log('process:',data);
});
