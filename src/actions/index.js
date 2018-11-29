import {
    ADD_TODO,
    DISPLAY_TODOS,
    TOGGLE_TODO,
} from '../constants'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        text
    }
})

export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: {
            user
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const displayTodos = (filter) => {
    return {
        type: DISPLAY_TODOS,
        payload: filter
    }
}

