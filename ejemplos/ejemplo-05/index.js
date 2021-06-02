const Koa = require('koa');
const koaBody = require('koa-body');
const routes = require('./src/routes');

const app = new Koa();

app.use(koaBody());

app.use(routes.routes());

app.listen(3000);
