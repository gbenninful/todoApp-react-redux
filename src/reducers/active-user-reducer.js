import { USER_SELECTED } from '../constants';

const activeUserReducer = (state = [], action) => {
    switch (action.type) {
        case USER_SELECTED:
            return action.payload.user;
        default:
            return state;
    }
}

export default activeUserReducer;