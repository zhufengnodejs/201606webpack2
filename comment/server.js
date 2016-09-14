var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin',"*");
    next();
});
//查询所有的留言
app.get('/comments',function(req,res){
    db.Comment.find().then(function(comments){
        res.send(comments);
    }).catch(function(err){
        res.status(500).send('查询出错');
    })
});
app.post('/comments',function(req,res){
   var comment = req.body;
   db.Comment.create(comment).then(function(data){
       res.send(data);
   }).catch(function(err){
       res.status(500).send('保存出错!');
   })
});
app.listen(9090);