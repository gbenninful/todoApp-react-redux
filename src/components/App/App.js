import React from 'react';
import './App.css';
import AddTodo from '../AddTodo';
import UserList from '../UserList';
import TodoList from '../TodoList';
import UserGreeting from '../UserGreeting';

const App = () => {

  return (
    <div className="App">
      <h2>Group Members</h2>
      <UserList />
      <UserGreeting />
      <br />

      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
    </div>
  )
};
export default App;   
