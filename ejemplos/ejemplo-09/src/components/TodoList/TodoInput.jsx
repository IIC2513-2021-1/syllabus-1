/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.code === 'Enter' && title) {
      // console.log(event.target.value);
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <input
      type="text"
      className="add-todo"
      placeholder="Agregar todo y presionar Enter"
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      value={title}
    />
  );
}
