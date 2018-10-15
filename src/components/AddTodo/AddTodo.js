import React from 'react';
import { connect } from 'react-redux';
import {
    addTodo
} from '../../actions';

let input;

// export const handleAddTodo = (event) => {
//     event.preventDefault(); 
//     addTodo(input.value);
//     console.log('Value: ', input.value);
//     input.value = '';
// }

const AddTodo = ({ dispatch}) => {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
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

export default connect()(AddTodo);