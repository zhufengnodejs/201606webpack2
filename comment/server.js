var express = require('express');
var db = require('./db');
var app = express();
app.get('/comments',function(req,res){
    db.Comment.find().then(function(comments){
        res.send(comments);
    }).catch(function(err){
        res.status(500).send('查询出错');
    })
});
app.listen(9090);