import React from 'react';
export default class CommentForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">姓名</label>
                            <input id="name" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">内容</label>
                            <input id="content" type="text" className="form-control"/>
                        </div>
                        <button className="btn btn-primary" type="submit">留言</button>
                    </form>
                </div>
            </div>
        )
    }
}

