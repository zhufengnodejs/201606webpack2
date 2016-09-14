import React from 'react';

export var Panel  = React.createClass({
    render(){
        return (
            <div className="container">
                <Form></Form>
                <Preview></Preview>
            </div>
        )
    }
});