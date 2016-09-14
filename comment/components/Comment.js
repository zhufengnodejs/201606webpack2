import React from 'react';
import 'moment/locale/zh-cn.js';
import moment from 'moment';
export default class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li className="list-group-item">
                {this.props.name}:{this.props.children}<span className="pull-right">{
                moment(this.props.date).fromNow()}</span>
            </li>
        )
    }
}