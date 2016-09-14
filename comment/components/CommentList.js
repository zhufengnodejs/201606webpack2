import React from 'react';
export default class CommentList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        <li className="list-group-item">
                            张三:今天天气真好   2016年9月14日16:01:03
                        </li>
                        <li className="list-group-item">
                            李四:是,特别好   2016年9月14日16:01:21
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

