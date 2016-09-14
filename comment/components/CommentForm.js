import React from 'react';
export default class CommentForm extends React.Component{
    constructor(props){
        super(props);
    }
    //1 收集姓名和内容 2.调用增加留言接口 3 把此留言添加到留言列表中
    handleSubmit(event){
        event.preventDefault();
        var name = this.refs.name.value;
        var content = this.refs.content.value;
        var comment =  {name,content,date:Date.now()};
        this.props.addComment(comment);
        this.refs.name.value = '';
        this.refs.content.value = '';
        return false;
    }
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">姓名</label>
                            <input ref="name" id="name" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">内容</label>
                            <textarea ref="content" name="content" id="content" cols="30" rows="10" className="form-control"></textarea>

                        </div>
                        <button className="btn btn-primary" type="submit">留言</button>
                    </form>
                </div>
            </div>
        )
    }
}

