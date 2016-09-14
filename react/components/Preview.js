import React from 'react';

export default React.createClass({
    render(){
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>字段名</th><th>字段值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>用户名</td><td>{this.props.username}</td>
                    </tr>
                    <tr>
                        <td>密码</td><td>{this.props.password}</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        )
    }
});