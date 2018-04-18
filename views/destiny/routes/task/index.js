import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';


const TaskPage = Loadable({
    loader: () => import('./components/task-page'),
    loading() {
        return <div>Loading...</div>
    }
});

const task = ({ match }) =>(
    <Route key="task-page" exact path={`${match.url}`} component={TaskPage} />
)

export default task;