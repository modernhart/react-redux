import React from 'react';
import AddTodo from './component/Addtodo';
import TodoList from './component/Todolist';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => (
  <React.Fragment>
    <Container>
      <AddTodo />
      <TodoList />
    </Container>
  </React.Fragment>
);

export default App;
