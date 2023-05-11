import Koa from 'koa';
import router from './routers';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import mongo from 'koa-mongo';
import config from './config';

const server = new Koa();

// Middlewares
server.use(cors());
server.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
});
server.use(bodyParser());

server.use(router.routes()).use(router.allowedMethods());
// server.use(mongo());

const SERVER_PORT = config.server.port;
const { DEBUG } = config.mode;

server.listen(SERVER_PORT, () => {
  if (DEBUG) console.log('Debug mode!');
  console.info('Server listening on port: ' + SERVER_PORT);
});

export default server;
