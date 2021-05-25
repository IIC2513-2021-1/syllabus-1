const { getTodos } = require('./src/todos');
const { getMetrics } = require('./src/metrics');

getTodos().then(console.log);
// getMetrics().then(console.log);
