const KoaRouter = require('koa-router');
const todos = require('./todos');

const router = new KoaRouter();

router.use('/todos', todos.routes());

module.exports = router;
