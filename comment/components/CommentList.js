import React from 'react';
import Comment from './Comment';
export default class CommentList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        <Comment name="张三" date="2016">
                            今天天气真好
                        </Comment>
                        <Comment name="李四" date="2017">
                            今天雨很大
                        </Comment>
                    </ul>
                </div>
            </div>
        )
    }
}

