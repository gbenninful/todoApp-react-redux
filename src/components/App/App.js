import React from 'react';
import './App.css';
import AddTodo from '../AddTodo';
import UserList from '../UserList';
import TodoList from '../TodoList';
import UserGreeting from '../UserGreeting';

const App = () => {
  return (
    <div className="App">
      <h3>Group Members</h3>
      <UserList />
      <br />

      <UserGreeting greeting="hello" />
      <br />

      <h3>Todos</h3>
      <AddTodo />
      <TodoList />
      <br />

      <a href="#/">Show All Todos</a> || <a href="#/">Show Completed Todos</a> || <a href="#/">Show Incomplete Todos</a>
    </div>
  )
};
export default App;   
