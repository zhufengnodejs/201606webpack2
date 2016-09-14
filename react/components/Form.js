import React from 'react';

export default React.createClass({
    setUsername(event){
        this.props.setVal('username',event.target.value);
    },
    setPassword(event){
        this.props.setVal('password',event.target.value);
    },
    render(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input onChange={this.setUsername}  value={this.props.username} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input onChange={this.setPassword} value={this.props.password} type="text" className="form-control"/>
                </div>
            </form>
        )
    }
});