import {
    ADD_TODO
} from '../Constants'

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: Date.now(),
    text
})

