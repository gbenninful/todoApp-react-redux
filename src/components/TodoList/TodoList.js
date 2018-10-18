import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

export default class TodoList extends PureComponent {

// static propTypes = {
//     todos: PropTypes.array.isRequired
// }

displayTodos() {
    return this.props.todos.map((todo) => {
        return(<li key={todo.id}>{todo.text}</li>);
    })
}

    render () {
        return(
            <ul>{this.displayTodos()}</ul>
        )
    }
}

// const TodoList = ({todos}) => (
//     <ul>
//         {todos.map((todo) => {
//             return <li key={todo.id}>{todo.text}</li>
//         })}
//     </ul>
// )

// export default TodoList;