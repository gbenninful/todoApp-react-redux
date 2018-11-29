import { connect } from 'react-redux';
import TodoList from './TodoList';
import {
    // getAllTodos,
} from '../../selectors/selectors';
import { TODO_FILTER } from '../../constants';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../actions';

const mapStateToProps = (state) => {
    console.log('STATE: ', state);
    return {
        // todos: getAllTodos(state)
        todos: getFilteredTodos(state.todos, TODO_FILTER)
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleTodo: (todo) => toggleTodo(todo)
    }, dispatch);
}

export const getFilteredTodos = (todos, filter) => {
    switch (filter) {
        case TODO_FILTER.SHOW_ALL_TODOS:
            return todos;
        case TODO_FILTER.SHOW_COMPLETED_TODOS:
            return todos.filter((todo) => todo.completed)
        case TODO_FILTER.SHOW_INCOMPLETED_TODOS:
            return todos.filter((todo) => !todo.completed)
        default:
            return todos;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
