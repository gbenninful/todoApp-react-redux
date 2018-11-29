import { combineReducers } from 'redux';
import activeUserReducer from './active-user-reducer';
// import filteredTodosReducer from './filtered-todos-reducer';
import todosReducer from './todos-reducer';
import usersReducer from './users-reducers';

const rootReducer = combineReducers({
    activeUser: activeUserReducer,
    // filteredTodos: filteredTodosReducer,
    todos: todosReducer,
    users: usersReducer,
});

export default rootReducer;