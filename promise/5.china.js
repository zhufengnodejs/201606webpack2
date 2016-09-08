var fs = require('fs');
function readFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    });
}

readFile('./1.txt')
    .then(function (data) {
        //成功的回调可以返回一个新的promie
        console.log(data);
  //如果成功的回调返回是一个promise,那么它会作为then的返回值
        return readFile(data);
    })
    .then(function (data) {
        console.log(data);
        return readFile(data);
    })
    .then(function (data) {
        console.log(data);
    }).catch(function(err){
       console.error(err);
});