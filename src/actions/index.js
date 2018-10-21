import {
    ADD_TODO,
    TOGGLE_TODO
} from '../constants'

export const addTodo = (text) => ({
        type: ADD_TODO,
        id: Date.now(),
        text

})

export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}

export const toggleTodo = (id) => {
    console.log('You selected: ', id);
    return {
        type: TOGGLE_TODO,
        id
    }
}
