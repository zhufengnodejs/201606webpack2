//解构赋值
//导出的 是一个对象 有一个name属性  {name:'zfpx'}
//var {name} = {name:'zfpx'};
import {name} from './component';
//var name = require('./component.js');
require('bootstrap/dist/css/bootstrap.css');
var img = document.createElement('img');
img.className = 'img-circle';
img.src= require('./1.jpg');
document.body.appendChild(img);
var img = document.createElement('img');
img.className = 'img-circle';
img.src= require('./big.jpg');
document.body.appendChild(img);
require('./index.less');
alert(name);