//先创建一个promise实例
var homebig = new Promise(function(resolve,reject){
    //创建promise实例的时候，此函数会立刻执行
    setTimeout(function(){
        if(Math.random()>0.5){
            //1. 变成成功态，调用成功的回调
            resolve('做好家具');//如果成功的话把成果传给resolve
        }else{
            // 1.变成失败态 2. 调用失败的回调
            reject('厂子失火了');//如果失败的话把失败的原因告诉reject
        }
    },2*1000);
});
// promies 的then方法用来注册成功和失败的回调函数
homebig.then(function(data){
    console.log(data);
},function(reason){
    console.error(reason);
});