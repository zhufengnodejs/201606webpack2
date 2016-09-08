class Promise{
   constructor(fn){
     this._status = 'unfulfilled';//初始态
     var resolve = (data)=>{
        this._status = 'fulfilled';//成功态
        this._fulfilledHandler(data);
     }
     var reject = (error)=>{
        this._status = 'failed';//失败态
         this._errorHandler(error);
     }
     fn(resolve,reject);
   }
    //成功的回调 失败的回调
   then(fulfilledHandler,errorHandler){
       //把两个回调函数暂存在的promise内部
       this._fulfilledHandler = fulfilledHandler;
       this._errorHandler = errorHandler;
   }
}

module.exports = Promise;