/* eslint-disable global-require, import/no-extraneous-dependencies */
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
// Use default router
server.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('JSON Server is running');
});
