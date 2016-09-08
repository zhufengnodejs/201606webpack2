var add = (a,b)=>a+b;
console.log(add(1,2));

//箭头函数没有自己的this指针,会使用外部的this
var obj = {
    name:'zfpx',
    getName(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}
obj.getName();