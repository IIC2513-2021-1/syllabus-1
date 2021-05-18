class TodoList {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  remember(task) {
    this.todoList.push(task);
  }

  /* There was an error in the slides of this lecture */
  /* Here it's corrected */
  prioritize(task) {
    this.todoList.unshift(task);
  };

  getTask() {
    return this.todoList.shift();
  };

  show() {
    this.todoList.forEach((item) => console.log(item));
  };
}

module.exports = TodoList;
