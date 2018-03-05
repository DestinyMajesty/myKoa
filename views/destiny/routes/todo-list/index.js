import React from 'react';
import { Route } from 'react-router-dom';
import TodoListPage from './components/todo-list-page';

const todoList = ({ match }) =>(
    <Route key="todo-list-page" exact path={`${match.url}`} component={TodoListPage} />
)

export default todoList;