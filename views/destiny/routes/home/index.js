import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home-page';

const home = ({ match }) =>(
    <Route key="home-page" exact path={`${match.url}`} component={HomePage} />
)

export default home;
        
