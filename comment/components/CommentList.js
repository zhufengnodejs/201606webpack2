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
                        {
                            this.props.comments.map((item,index)=><Comment key={index} name={item.name} date={item.date}>
                                {item.content}
                            </Comment>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

