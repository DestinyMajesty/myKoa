import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as stores from './store';
import home from './routes/home';
import users from './routes/users';
import task from './routes/task';
import todoList from './routes/todo-list';

const BasicExample = () => (

    <Provider {...stores}>
        <Router basename="mykoav1">
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/users">用户</Link></li>
                    <li><Link to="/task">任务</Link></li>
                    <li><Link to="/todolist">事务列表</Link></li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/" render={() => ((<Redirect to="/home" />))} />
                    <Route path="/home" exact component={home} />
                    <Route path="/users" exact component={users} />
                    <Route path="/task" exact component={task}/> />
                    <Route path="/todolist" exact component={todoList} />
                </Switch>
            </div>
        </Router>
    </Provider>

)
export default BasicExample