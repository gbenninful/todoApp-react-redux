import { connect } from 'react-redux';
import TodoList from './TodoList';
import { getAllTodos } from '../../selectors/selectors';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../actions';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        todos: getAllTodos(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleTodo: (todo) => toggleTodo(todo)
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

