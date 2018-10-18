import { connect } from 'react-redux';
import TodoList from './TodoList';

export function mapStateToProps (state) {
    console.log('Value of State: ', state);
    
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);