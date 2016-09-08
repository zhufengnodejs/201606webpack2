/**
 * 1. 从手机号获取微信号  /getWeixinByPhone
 * 2. 从微信号获取微信用户名 /getUserNameByWeixin
 */
var express = require('express');
var app = express();
app.use(function(req,res,next){
    //访问控制-允许哪个来源 *代表所有的来源
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    next();
});
/**
 * 从客户端向服务器传参
 * url查询字符串，请求体，请求头，路径参数
 */
var weixins = {'15718856132':'zhangrenyang2000'};
//传入手机号，获取微信号
app.get('/getWeixinByPhone/:phone',function(req,res){
    res.send({data:weixins[req.params.phone]});
});
var infos = {'zhangrenyang2000':'珠峰培训'}
//传入微信号，获取用户名
app.get('/getUserNameByWeixin/:weixin',function(req,res){
    res.send({data:infos[req.params.weixin]});
});
app.listen(9090);
