import Router from '@koa/router';
import config from '../config';
import { useUserRouter } from './user';
const router = new Router();

router.get('/', async (ctx, next) => {
  if (config.mode.DEBUG) {
    ctx.body = 'hello manyu';
  }
});

useUserRouter(router);

export default router;
