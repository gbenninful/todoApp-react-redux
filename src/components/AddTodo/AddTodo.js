import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

let input;

export default class AddTodo extends PureComponent {
    static propTypes = {
        addTodo: PropTypes.func,
        users: PropTypes.array
    }

    handleAddTodo (event) {
        event.preventDefault(); 
        this.props.addTodo(input.value);
        input.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleAddTodo(event)}>
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
}


