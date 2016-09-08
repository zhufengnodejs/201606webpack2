class Promise{
    //构造函数
   constructor(fn){
     this._status = 'unfulfilled';//初始态
     var self = this;
       //成功时可以调用
     var resolve = function(data){
         self._status = 'fulfilled';//成功态
         self._fulfilledHandler(data);//调用成功的回调
     }
       //失败时可以调用
     var reject = (error)=>{
        this._status = 'failed';//失败态
         this._errorHandler(error);//调用失败的回调
     }
       //工作有进展时可以调用
     var notify=(data)=>{
           this._progressHandler(data);//调用有进展 的回调
     };
     fn(resolve,reject,notify);
   }
    //成功的回调 失败的回调
   then(fulfilledHandler,errorHandler,progressHandler){
       //把两个回调函数暂存在的promise内部
       this._fulfilledHandler = fulfilledHandler;
       this._errorHandler = errorHandler;
       this._progressHandler = progressHandler;
   }
}

module.exports = Promise;