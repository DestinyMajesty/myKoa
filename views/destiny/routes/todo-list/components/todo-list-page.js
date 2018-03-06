import React from 'react';
import { getTodo,toggleTodo, addTodo} from './todo-list-redux';  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Todo extends React.Component {  
    render() {  
        return (  
            <li  
                onClick = {this.props.onClick}  
                style = {{  
                    textDecoration: this.props.completed ? 'line-through' : 'none',  
                    cursor: this.props.completed ? 'default' : 'pointer',  
                    color: this.props.completed ? '#f00' : '#000'  
                }}  
            >  
                {this.props.text}  
            </li>  
        );  
    }  
}

class TodoList extends React.Component {
    componentDidMount(){
        this.props.actions.getTodo();
    }  
    render() {  
        return (  
            <ul>  
                {  
                    this.props.todos.map((todo, index) =>   
                        <Todo key = {index}  
                            {...todo}  
                            onClick = {() => {  
                                this.props.actions.toggleTodo(index);  
                            }}  
                        />  
                    )  
                }  
            </ul>  
        );  
    }  
} 

class AddTodo extends React.Component {  
    render() {  
        let input;  
        return (  
            <form onSubmit = {  
                (e) => {  
                    if (input.value.trim() === '') {  
                        return;  
                    }  
                    e.preventDefault();  
                    this.props.actions.addTodo(input.value);  
                    input.value = '';  
                }  
            }>  
                <input type="text" required ref = {node => {  
                    input = node;  
                }} />  
                <input type="submit" value="add" />  
            </form>  
        );  
    }  
}

class TodoListTable extends React.Component {  
    render() {  
        const {todos, visibilityFilter,actions} = this.props;  
          
        return (  
            <div>  
                <AddTodo  
                    actions={actions}  
                />  
                <TodoList   
                    todos = {todos}  
                    actions={actions}  
                />  
            </div>  
        );  
    }  
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ addTodo: addTodo, toggleTodo: toggleTodo, getTodo:getTodo}, dispatch)
    }
}

const TodoListPage = connect(mapStateToProps, mapDispatchToProps)(TodoListTable)
  
export default TodoListPage; 