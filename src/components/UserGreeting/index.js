// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserGreeting from './UserGreeting';

export function mapStateToProps(state) {
    // console.log('State', state);
    return {
        user: state.activeUser
    }
}

// export function mapDispatchToProps(dispatch) {
//     console.log('Calling mapDispatchToProps...!!');
//     return bindActionCreators({
//         selectUser      
//     }, dispatch);
// }

export default connect(mapStateToProps)(UserGreeting);