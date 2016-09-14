import React from 'react';
import Form from './Form.js';
import Preview from './Preview.js';
//一个模块只能默认导出一个变量
export default  React.createClass({
    //获取初始状态对象
    getInitialState(){
      return {username:'admin',password:'admin'};
    },
    setVal(attr,val){// username, '张三'  password 123456
        var update = {};
        update[attr] = val;
        this.setState(update);
    },
    render(){
        return (
            <div className="container">
                <Form setVal={this.setVal}  {...this.state}></Form>
                <Preview {...this.state}></Preview>
            </div>
        )
    }
});