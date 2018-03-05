
import { createStore, combineReducers,applyMiddleware } from 'redux';
import  { createLogger }  from 'redux-logger';

import todosReducer from './routes/todo-list/components/todo-list-redux';

const logger = createLogger();

const appReducer = combineReducers({
    todos:todosReducer
})

const store = createStore(appReducer, applyMiddleware(logger));

export default store;
