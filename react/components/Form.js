import React from 'react';

export default React.createClass({
    render(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input defaultValue={this.props.data.username} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input defaultValue={this.props.data.password} type="text" className="form-control"/>
                </div>
            </form>
        )
    }
});