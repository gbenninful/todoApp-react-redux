import React, { PureComponent } from 'react';
// import { selectUser } from '../../actions'

export default class UserList extends PureComponent {

  displayListItems() {
    return this.props.users.map((user) => {
      return (<li key={user.id} onClick={() => this.props.selectUser(user)}>{user.firstName} {user.lastName}</li>);
    })
  }

  render() {
    //  console.log('UserList Value of Props: ', this.props);
    return (
      <div className="user-list">
        <ul>{this.displayListItems()}</ul>
      </div>
    )
  }
}
