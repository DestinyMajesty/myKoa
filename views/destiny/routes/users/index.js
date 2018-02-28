import React from 'react';
import { Route } from 'react-router-dom';
import UserPage from './components/users-page';

const users = ({ match }) =>(
    <Route key="home-page" exact path={`${match.url}`} component={UserPage}/>
)
export default users;
