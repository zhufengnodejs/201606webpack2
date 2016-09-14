import React from 'react';
export default class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li className="list-group-item">
                {this.props.name}:{this.props.children}<span className="pull-right">{this.props.date}</span>
            </li>
        )
    }
}