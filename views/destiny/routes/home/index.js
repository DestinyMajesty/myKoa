import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const HomePage = Loadable({
    loader: () => import('./components/home-page'),
    loading() {
        return <div>Loading...</div>
    }
});

const home = ({ match }) => (
    <Route key="home-page" exact path={`${match.url}`} component={HomePage} />
)

export default home;

