import * as actions from './actionTypes';
import axios from '../../todo-axios';

export const getTodosStart = () => {
    return {
        type: actions.GET_TODOS_START
    }
};

export const getTodosSuccess = (todos) => {
    return {
        type: actions.GET_TODOS_SUCCESS,
        todos: todos,
        error: null
    }
};

export const getTodosFail = (error) => {
    return {
        type: actions.GET_TODOS_FAIL,
        error: error
    }
};

export const addTodoStart = () => {
    return {
        type: actions.ADD_TODO_START
    }
};

export const addTodoSuccess = (id, todo) => {
    return {
        type: actions.ADD_TODO_SUCCESS,
        todo: todo,
        id: id,
        error: null
    }
};

export const addTodoFail = (error) => {
    return {
        type: actions.ADD_TODO_FAIL,
        error: error
    }
}

export const addTodo = (name, date) => {
    return dispatch => {
        dispatch(addTodoStart());
        axios.post('/todos.json', {name: name, date: date})
            .then(response => {
                dispatch(addTodoSuccess(response.data.id, {name: name, date: date}));
            })
            .catch(err => {
                dispatch(addTodoFail(err));
            });
    };
}

export const getTodos = () => {
    return dispatch => {
        dispatch(getTodosStart());
        axios.get('/todos.json')
            .then(response => {
                const todos = [];
                for (let key in response.data) {
                    todos.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(getTodosSuccess(todos));
            }).catch(error => {
            dispatch(getTodosFail(error));
        });
    }
}