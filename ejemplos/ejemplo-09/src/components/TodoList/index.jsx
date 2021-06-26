import React from 'react';
import TodoInput from './TodoInput';
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
  const [todos, setTodos] = React.useState(initialData);

  // eslint-disable-next-line no-unused-vars
  const removeLastTodoItem = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  const handleRemoveTodoItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // eslint-disable-next-line no-unused-vars
  const toggleLastTodoItem = () => {
    const newTodos = [...todos];
    const lastTodo = newTodos[todos.length - 1];
    lastTodo.completed = !lastTodo.completed;
    setTodos(newTodos);
  };

  return (
    <main className="centered">
      <div className="container">
        <header>
          <h1>Todo list</h1>
          <TodoInput />
        </header>
        <section className="todo-list">
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onRemove={handleRemoveTodoItem}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
