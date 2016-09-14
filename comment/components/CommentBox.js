import React from 'react';
export default class CommentBox extends React.Component{
    //构造函数 使用属性对象调用父类的构造函数进行初始化
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3 className="text-center">珠峰留言板</h3>
                    </div>
                </div>
            </div>
        )
    }
}