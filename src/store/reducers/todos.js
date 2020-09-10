import * as actions from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    todos: [],
    error: null
};

const getTodosStart = (state) => {
    return updateObject(state, {error: null});
};

const getTodosSuccess = (state, action) => {
    return updateObject(state, {todos: action.todos});
};

const getTodosFail = (state, action) => {
    return updateObject(state, {error: action.error});
};

const addTodoStart = (state) => {
    return updateObject(state, {error: null});
};

const addTodoSuccess = (state, action) => {
    return updateObject(state, {todos: [...state.todos, action.todo], error: null});
};

const addTodoFail = (state, action) => {
    return updateObject(state, {error: action.error});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TODO_START: return addTodoStart(state);
        case actions.ADD_TODO_SUCCESS: return addTodoSuccess(state, action);
        case actions.ADD_TODO_FAIL: return addTodoFail(state, action);
        case actions.GET_TODOS_START: return getTodosStart(state);
        case actions.GET_TODOS_SUCCESS: return getTodosSuccess(state, action);
        case actions.GET_TODOS_FAIL: return getTodosFail(state, action);
        default: return state;
    }
};

export default reducer;
