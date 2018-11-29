import {
    ADD_TODO,
    DISPLAY_TODOS,
    // TODO_FILTER,
    TOGGLE_TODO,
} from '../constants';

// const initialState = {
//     todos: [],
//     // filter: TODO_FILTER.SHOW_ALL_TODOS
// };

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo
            )
        case DISPLAY_TODOS:
            return action.payload
        default:
            return state;
    }
}

export default todosReducer;
