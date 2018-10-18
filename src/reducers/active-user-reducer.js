export default function (state = {status: 'hey there'}, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
        default:
            return state;
    }
}