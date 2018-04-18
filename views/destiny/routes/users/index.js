import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const UserPage = Loadable({
    loader: () => import('./components/users-page'),
    loading() {
        return <div>Loading...</div>
    }
});

const users = ({ match }) =>(
    <Route key="home-page" exact path={`${match.url}`} component={UserPage}/>
)
export default users;
