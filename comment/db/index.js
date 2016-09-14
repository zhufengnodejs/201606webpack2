var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/comment');
//先定义模型骨架
var CommentSchema = new mongoose.Schema({
    name:String,
    date:{type:Date,default:Date.now()},
    content:String
})
//根据骨架定义模型
exports.Comment = mongoose.model('Comment',CommentSchema);

/*var comments = [
    {name:'张三',content:'今天天气不错'}
    ,{name:'李四',content:'明天天气不错'}
];
//exports.Comment.remove();

exports.Comment.create(comments).then(function(data){
    console.log(data);
});*/
