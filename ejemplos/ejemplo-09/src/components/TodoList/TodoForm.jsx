/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo"
        placeholder="Agregar todo y presionar Enter"
        onChange={handleChange}
        value={title}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
