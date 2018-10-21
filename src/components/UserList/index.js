import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from './UserList';
import { selectUser } from '../../actions'
import { getAllUsers } from '../../selectors/selectors';

const mapStateToProps = (state) => {
    return {
        users: getAllUsers(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectUser      
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);