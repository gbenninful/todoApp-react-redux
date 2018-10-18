import { combineReducers } from 'redux';
import todos from './todos';
import users from './users-reducers'
import ActiveUserReducer from './active-user-reducer';

const rootReducer = combineReducers({
    users,
    todos,
    activeUser: ActiveUserReducer
});

export default rootReducer;