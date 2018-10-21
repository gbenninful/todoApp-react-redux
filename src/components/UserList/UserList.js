import React from 'react';
import PropTypes from 'prop-types';

const UserList = (props) => {
  const { users, selectUser } = props;

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id} onClick={() => selectUser(user)}>
          {user.firstName} {user.lastName}
        </li>
      })}
    </ul>
  )
}

export default UserList;

UserList.propTypes = {
  users: PropTypes.array,
  selectUser: PropTypes.func
}