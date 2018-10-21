import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import AddTodo from './AddTodo';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo: (todo) => addTodo(todo)
    }, dispatch);
}

const mapStateToProps = (state) =>{
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);