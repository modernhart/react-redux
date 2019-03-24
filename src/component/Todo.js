import React from 'react';

const Todo = ({id, text, completed, toggleTodo, deleteTodo, order}) => {
  const classname = (completed) ? 'completed' : '';
  return (
    <tr className={classname}>
      <td>{order + 1}</td>
      <td onClick={toggleTodo}><span>{text}</span></td>
      <td>
        <center><img alt="delete" src="https://image.flaticon.com/icons/png/512/61/61795.png" style={{cursor: 'pointer', width: '24px'}} onClick={deleteTodo} /></center>
      </td>
    </tr>
  );
}

export default Todo;
