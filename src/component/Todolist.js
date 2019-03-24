import React from 'react';
import Todo from './Todo';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggle, deleteOne } from '../action/todo';

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
  <React.Fragment>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width: '10%'}}></th>
          <th>TODO LIST</th>
          <th style={{width: '10%'}}></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            {...todo}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            order={index}
          />
        ))}
      </tbody>
    </Table>
  </React.Fragment>
);

const mapStateToProps = (state) => {
  return {
    todos : state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo : (id) => {
      dispatch(toggle(id));
    },
    deleteTodo : (id) => {
      dispatch(deleteOne(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
