import React from 'react';
import ReactDOM from 'react-dom';
import Mytest from './mytest';
import apiInfo from './helper/api-info';

window.apiInfo = apiInfo;

ReactDOM.render(<div><Mytest/></div>, document.getElementById('root'));
