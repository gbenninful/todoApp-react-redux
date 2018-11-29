import React from 'react';
import './App.css';
import AddTodo from '../AddTodo';
// import FilterTodos from '../FilterTodos';
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

      <h3>Todo List</h3>
      <AddTodo />
      <TodoList />

      {/* <FilterTodos /> */}
    </div>
  )
};

export default App;   
