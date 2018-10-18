import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import AddTodo from './AddTodo';

export function mapDispatchToProps (dispatch){
    return bindActionCreators({
        addTodo: (todo) => addTodo(todo)
    }, dispatch);
}

export function mapStateToProps (state){
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);