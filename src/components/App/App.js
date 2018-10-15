import React from 'react';
import './App.css';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';

const App = () => (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
);

export default App;

