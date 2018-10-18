import {
    ADD_TODO
} from '../constants'

export const addTodo = (text) => ({
        type: ADD_TODO,
        id: Date.now(),
        text

})

export function selectUser(user) {
    console.log('You selected: ', user.firstName);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}
