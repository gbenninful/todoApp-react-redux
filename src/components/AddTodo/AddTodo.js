import React from 'react';
import './AddTodo.css';
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
                    {/* <div className="todo-label"><label htmlFor="new-todo">Please enter your Todos: </label></div> */}
                    <label htmlFor="new-todo" className="todo-label">Please enter your Todos: </label>

                    <input
                        type="text"
                        id="new-todo"
                        ref={node => input = node}
                    />
                    {/* <input type="submit" value="Add Todo" /> */}
                    <button>Add Todo</button>
                </form>
            </div>
        )
}

export default AddTodo;

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


