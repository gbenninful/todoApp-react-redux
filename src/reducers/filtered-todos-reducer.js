// import {
//     SHOW_ALL_TODOS,
//     SHOW_COMPLETED_TODOS,
//     SHOW_INCOMPLETED_TODOS
// } from '../constants';

// const filteredTodosReducer = (state = [], action) => {

//     switch (action.type) {
//         case SHOW_COMPLETED_TODOS:
//             return state.concat(action.payload.filter(todo => todo.completed));
//         case SHOW_INCOMPLETED_TODOS:
//             return state.concat(action.payload.filter(todo => !todo.completed));
//         case SHOW_ALL_TODOS:
//             console.log('Show All');
//             return state.concat(action.payload);
//         default:
//             return state;


//         // case SHOW_ALL_TODOS:
//         //     return action.payload.todos;
//         // case SHOW_COMPLETED_TODOS:
//         //     return action.payload.todos.filter(todo => todo.completed)
//         // case SHOW_INCOMPLETED_TODOS:
//         //     return action.payload.todos.filter(todo => !todo.completed)
//         //  default:
//         //     return state;
//     }
// }

// export default filteredTodosReducer;