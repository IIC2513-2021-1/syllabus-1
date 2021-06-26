/* eslint-disable react/prop-types */
import React from 'react';

export default function TodoItem(props) {
  const { todo, onRemove } = props;

  const handleRemove = function handleRemove() {
    onRemove(todo.id);
  };

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {}}
      />
      <span>{todo.title}</span>
      <button type="button" onClick={handleRemove}>🗑</button>
    </li>
  );
}
