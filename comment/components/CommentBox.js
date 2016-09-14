import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import $ from 'jquery';
export default class CommentBox extends React.Component{
    //构造函数 使用属性对象调用父类的构造函数进行初始化
    constructor(props){
        super(props);
        //es5  getInitialState() return {comments:[]}
        //es6
        this.state = {comments:[]};
        this.init();
    }
    init(){
        $.get(this.props.url).then(comments=>{
            this.setState({comments});
        })
    }
    addComment(comment){//{name,content}
        $.post(this.props.url,comment).then(comment=>{//{_id date}
            this.state.comments.push(comment);
            this.setState({comments:this.state.comments});
        })
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
                <CommentForm addComment={this.addComment.bind(this)}></CommentForm>
            </div>
        )
    }
}