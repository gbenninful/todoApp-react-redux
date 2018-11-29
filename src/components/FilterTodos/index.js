import { connect } from 'react-redux';
import FilterTodos from './FilterTodos';
import { bindActionCreators } from 'redux';
import {
    displayTodos
} from '../../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        displayTodos: (todos) => displayTodos(todos)
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterTodos);

