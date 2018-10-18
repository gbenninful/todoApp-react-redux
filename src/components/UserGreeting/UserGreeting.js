import React, { PureComponent } from 'react';
// import { selectUser } from '../../actions'

export default class UserGreeting extends PureComponent {

  render() {
    return (
      <div className="user-list">
        <h3>Greetings</h3>
        <div>{this.props.user.greeting}</div>
      </div>
    )
  }
}
