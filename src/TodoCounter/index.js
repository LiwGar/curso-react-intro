import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

  const {
    completedTodos, totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> ToDoS
    </h1>
  );
}

export { TodoCounter };



