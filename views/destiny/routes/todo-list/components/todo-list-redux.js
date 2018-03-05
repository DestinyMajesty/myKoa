// action type 常量
const ADD_TODO  = 'ADD_TODO';  
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER =  'SET_VISIBILITY_FILTER';

const visibilityType = {  
    SHOW_ALL      : 'SHOW_ALL',  
    SHOW_COMPLETED: 'SHOW_COMPLETED',  
    SHOW_ACTIVE   : 'SHOW_ACTIVE'  
};

// action creater
export const addTodo = (text) => ({  
    type: ADD_TODO,  
    text  
});  
  
export const toggleTodo = (index) => ({  
    type: TOGGLE_TODO,  
    index  
});  
  
export const setVisibilityFilter = (filter) => ({  
    type: SET_VISIBILITY_FILTER,  
    filter  
});

// todos 的reducer
const todosReducer = (state = [], action) => {  
      
    switch (action.type) {  
        case ADD_TODO:  
            return [  
                ...state,  
                {  
                    text: action.text,  
                    completed: false  
                }  
            ]  
        case TOGGLE_TODO:  
            return state.map((todo, index) => {  
                if (action.index === index) {  
                    return Object.assign({}, todo,{  
                        completed: !todo.completed  
                    })  
                }  
                return todo;  
            });  
        default:  
            return state;  
    }  
}

export default todosReducer;



