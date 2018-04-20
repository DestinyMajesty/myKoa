import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import TodoListPage from './components/todo-list-page';


// const TodoListPage = Loadable({
//     loader: () => import('./components/todo-list-page'),
//     loading() {
//         return <div>Loading...</div>
//     }
// });

const todoList = ({ match }) =>(
    <Route key="todo-list-page" exact path={`${match.url}`} component={TodoListPage} />
)

export default todoList;