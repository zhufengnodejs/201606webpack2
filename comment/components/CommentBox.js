import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
export default class CommentBox extends React.Component{
    //构造函数 使用属性对象调用父类的构造函数进行初始化
    constructor(props){
        super(props);
        //es5  getInitialState() return {comments:[]}
        //es6
        this.state = {comments:[
            {name:'张三',date:'2016',content:'今天天气不错'}
            ,{name:'李四',date:'2017',content:'明天天气不错'}
        ]};
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3 className="text-center">珠峰留言板</h3>
                    </div>
                </div>
                <CommentList comments={this.state.comments}></CommentList>
                <CommentForm></CommentForm>
            </div>
        )
    }
}