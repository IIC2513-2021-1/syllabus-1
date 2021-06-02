const KoaRouter = require('koa-router');

const router = new KoaRouter();

const todos = [
  {
    "id": 1,
    "title": "One todo item",
    "completed": false
  },
];

router.get('todos.list', '/', async (ctx) => {
  ctx.body = {
    todos,
  };
});

router.post('todos.create', '/', async (ctx) => {
  const { title } = ctx.request.body;

  if (!title) ctx.throw(422);

  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);

  ctx.status = 201;
  ctx.body = newTodo;
});

module.exports = router;
