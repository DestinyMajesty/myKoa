import React from 'react';
import ReactDOM from 'react-dom';
import RootRoute from './destiny/routes';
import apiInfo from './helper/api-info';

window.apiInfo = apiInfo;

ReactDOM.render(<div><RootRoute/></div>, document.getElementById('root'));
