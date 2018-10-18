import { connect } from 'react-redux';
import App from './App';

export function mapStateToProps (state) {
    console.log('Value of State: ', state);
    
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(App);