import React from 'react';
import Form from './Form.js';
import Preview from './Preview.js';
//一个模块只能默认导出一个变量
export default  React.createClass({
    //获取初始状态对象
    getInitialState(){
      return {user:{username:'admin',password:'admin'}};
    },
    render(){
        return (
            <div className="container">
                <Form data={this.state.user}></Form>
                <Preview data={this.state.user}></Preview>
            </div>
        )
    }
});