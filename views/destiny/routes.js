import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
	Switch,
    Redirect,
} from 'react-router-dom'
import home from './routes/home';
import users from './routes/users';

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/users">用户</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr />

			<Switch>
				{/* 默认路由的实现 */}
				<Route exact path="/" render={() => ((<Redirect to="/home" />))} />
				<Route path="/home" exact component={home}/>
				<Route path="/users" exact component={users}/>
			</Switch>
        </div>
    </Router>
)
export default BasicExample