import React from 'react';

const TodoList = ({todos}) => (
    <ul>
        {todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>
        })}
    </ul>
)

export default TodoList;