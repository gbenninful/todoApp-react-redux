export const getActiveUser = (state) => {
    return state.activeUser;
}

export const getAllTodos = (state) => {
    console.log('getAllTodos State: ', state);
    return state.todos;

}

export const getAllUsers = (state) => {
    return state.users;
}

