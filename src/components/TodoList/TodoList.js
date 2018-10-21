import React from 'react';

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map((todo) => {
            return <li key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? 'completed-todos' : ''}
            >
                {todo.text}
            </li>
        })}
    </ul>
)

export default TodoList;