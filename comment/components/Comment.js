import React from 'react';
import 'moment/locale/zh-cn.js';
import moment from 'moment';
export default class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        /**
         * 1. 给小X绑定点击事件,取得当前要删除的留言ID
         * 2. 调用CommentBox的删除方法，调用后台接口进行删除
         * 3. 删除之后重新刷新留言列表
         */
        return (
            <li className="list-group-item">
                {this.props.name}:{this.props.children}
                <span className="glyphicon glyphicon-remove"></span>
                <span className="pull-right">{
                moment(this.props.date).fromNow()}</span>
            </li>
        )
    }
}