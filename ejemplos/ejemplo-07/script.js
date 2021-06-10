function createTodoItem(title) {
  const newTodoItem = document.createElement('li');
  const todoParagraph = document.createElement('p');
  todoParagraph.textContent = title;

  newTodoItem.appendChild(todoParagraph);
  newTodoItem.setAttribute('class', 'todo-item');

  const todoUlElement = document.querySelector('.todo-list ul');
  todoUlElement.appendChild(newTodoItem);
}

function removeTodoItem(todoItemElem) {
  todoItemElem.remove();
}

function handlerFunction() {
  console.log('Clicked button');
}

document.addEventListener('DOMContentLoaded', function () {
  const firstTodoItem = document.querySelector('.todo-item:first-child');
  const firstButton = firstTodoItem.children[2];
  firstButton.onclick = handlerFunction;
});
