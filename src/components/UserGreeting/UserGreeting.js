import React from 'react';

const UserGreeting = ({ user }) => {

  return (
    <div className="user-list">
      <h3>Greetings</h3>
      <p>Click on a group member above to see their Greetings</p>
      <div>{(user.firstName && user.greeting) && user.firstName + ' says ' + user.greeting}</div>
    </div>
  )
}

export default UserGreeting;