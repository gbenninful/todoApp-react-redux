import React from 'react';
import PropTypes from 'prop-types';

let input;

const AddTodo = ({addTodo}) => {

    const handleAddTodo = (event) => {
        event.preventDefault(); 
        addTodo(input.value);
        input.value = '';
    }

        return (
            <div>
                <form onSubmit={(event) => handleAddTodo(event)}>
                    <label htmlFor="new-todo">Please enter your Todos: </label>
                    <input
                        type="text"
                        id="new-todo"
                        placeholder="Add Todo"
                        ref={node => input = node}
                    />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
}

export default AddTodo;

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


