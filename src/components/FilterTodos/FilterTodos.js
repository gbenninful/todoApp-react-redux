import React from 'react';
import { TODO_FILTER } from '../../constants';

const FilterTodos = (props) => {
    const {
        displayTodos
        // todos
    } = props;

    return (
        <div>
            <button onClick={() => displayTodos(TODO_FILTER.SHOW_ALL_TODOS)}>Show All</button>
            <button onClick={() => displayTodos(TODO_FILTER.SHOW_COMPLETED_TODOS)}>Show Completed</button>
            <button onClick={() => displayTodos(TODO_FILTER.TODO_FILTER)}>Show Incompleted</button>
        </div>
    )
}

export default FilterTodos;


