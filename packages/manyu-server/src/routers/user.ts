import config from '../config';
import mongo from 'koa-mongo';
import type { User } from '../generators/user';
import { userGenerator } from '../generators/user';
import { DefaultState, DefaultContext } from 'koa';
import Router from '@koa/router';
export const useUserRouter = (router: Router<DefaultState, DefaultContext>) => {
  router.get('/users', async (ctx, next) => {
    if (config.mode.DEBUG) {
      ctx.body = [userGenerator(), userGenerator(), userGenerator()];
    } else ctx.body = await ctx.db.collection('users').find().toArray();
  });

  router.get('/user/:id', async (ctx, next) => {
    const { id } = ctx.params;
    if (config.mode.DEBUG) {
      ctx.body = userGenerator({ id });
    } else ctx.body = await ctx.db.collection('users').findOne({ _id: id });
  });

  router.post<{}, { params: { user: User } }>('/user', async (ctx, next) => {
    const { user } = ctx.params;
    const result = await ctx.db.collection('users').insertOne(user);
    const userId = result.insertedId.toString();
    ctx.body = { userId };
  });

  router.post('/deleteUser/:user', async (ctx, next) => {
    const { user } = ctx.params;
    ctx.db.collection('users').deleteOne({
      // _id: mongo.Objectid(user.id),
    });
  });
};
