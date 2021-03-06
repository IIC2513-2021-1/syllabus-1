import React, { /* useEffect, */useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const initialData = [
  {
    id: 1,
    title: 'Poner atención en clases',
    completed: false,
  },
  {
    id: 2,
    title: 'Escribir un script JS en cliente',
    completed: false,
  },
  {
    id: 3,
    title: 'Comenzar a trabajar en Proyecto 2',
    completed: true,
  },
  {
    id: 4,
    title: 'Prepararme para la Interrogación',
    completed: true,
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialData);

  // eslint-disable-next-line no-unused-vars
  const removeLastTodoItem = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  const handleRemoveTodoItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleTodoItem = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed,
      };
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (title, completed = false) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Number(prevTodos[prevTodos.length - 1].id) + 1,
        title,
        completed,
      },
    ]);
  };

  // eslint-disable-next-line no-unused-vars
  const toggleLastTodoItem = () => {
    const newTodos = [...todos];
    const lastTodo = newTodos[todos.length - 1];
    lastTodo.completed = !lastTodo.completed;
    setTodos(newTodos);
  };

  // useEffect(() => {
  //   console.log('%cTodoList: effect after every render', 'color: cornflowerblue');
  //   return () => console.log(
  //     '%cTodoList: effect CLEANUP after every render but before new effect',
  //     'color: cornflowerblue',
  //   );
  // });

  // useEffect(() => {
  //   console.log('%cTodoList: effect after mounting', 'color: lightsalmon');
  //   return () => console.log(
  //     '%cTodoList: effect CLEANUP when unmounting',
  //     'color: lightsalmon',
  //   );
  // }, []);

  // useEffect(() => {
  //   console.log('%cTodoList: effect after todos state is updated', 'color: darkseagreen');
  //   return () => console.log(
  //     '%cTodoList: effect CLEANUP after todos state is updated',
  //     'color: darkseagreen',
  //   );
  // }, [todos]);

  // console.log('%cTodoList: render', 'color: orchid');

  return (
    <div className="container">
      <header>
        <h1>Todo list</h1>
        <TodoForm onAdd={handleAddTodo} />
      </header>
      <section className="todo-list">
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={() => handleRemoveTodoItem(todo.id)}
              onToggle={() => handleToggleTodoItem(todo.id)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
