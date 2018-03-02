import React from 'react';
import { Route } from 'react-router-dom';
import TaskPage from './components/task-page';

const task = ({ match }) =>(
    <Route key="home-page" exact path={`${match.url}`} component={TaskPage} />
)

export default task;