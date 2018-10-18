import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from './UserList';
import { selectUser } from '../../actions'

export function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser      
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);