import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(<CommentBox/>,
    document.querySelector('#app')
);

