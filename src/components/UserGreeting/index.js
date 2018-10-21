import { connect } from 'react-redux';
import UserGreeting from './UserGreeting';
import { getActiveUser } from '../../selectors/selectors';

const mapStateToProps = (state) => {
    return {
        user: getActiveUser(state)
    }
}

export default connect(mapStateToProps)(UserGreeting);