import config from '../config';
import mongo from 'koa-mongo';
import type { User } from '../generators/user';
import { userGenerator } from '../generators/user';
import { responseGenerator } from '../generators/response';
import { DefaultState, DefaultContext } from 'koa';
import Router from '@koa/router';
export const useUserRouter = (router: Router<DefaultState, DefaultContext>) => {
  /**
   * 获取所有用户信息列表
   * @method GET
   * @return 用户列表:User[]
   */
  router.get('/getUserList', async (ctx, next) => {
    if (config.mode.DEBUG) {
      ctx.body = responseGenerator()([userGenerator(), userGenerator(), userGenerator()]);
    } else {
      const result = await ctx.db.collection('users').find().toArray();
      ctx.body = responseGenerator()(result);
    }
  });

  /**
   * 获取单个用户信息
   * @param id:string|number
   * @method GET
   * @return 用户信息:User
   */
  router.get('/getUserById/:id', async (ctx, next) => {
    const { id } = ctx.params;
    if (config.mode.DEBUG) {
      ctx.body = responseGenerator()(userGenerator({ id }));
    } else {
      const result = await ctx.db.collection('users').findOne({ _id: id });
      ctx.body = responseGenerator()(result);
    }
  });

  /**
   * 新增或编辑用户信息
   * @param user:User
   * @method POST
   * @return 更新后的用户信息:Response<User>
   */
  router.post<{}, { request: { body: User } }>('/createOrUpdateUser', async (ctx, next) => {
    const user = ctx.request.body;
    if (config.mode.DEBUG) {
      ctx.body = `${'id' in user ? '更新' : '新建'}用户信息成功`;
    } else {
      let result;
      if ('id' in user) result = await ctx.db.collection('users').updateOne((v: User) => v.id == user.id, user);
      else result = await ctx.db.collection('users').insertOne(user);
      const userId = result.toString();
      ctx.body = responseGenerator()({ userId });
    }
  });

  /**
   * 删除用户信息
   * @param id:string|number
   * @method POST
   * @return Response<{ id }>
   */
  router.post<{}, { request: { body: { id: string | number } } }>('/deleteUser', async (ctx, next) => {
    const { id } = ctx.request.body;

    if (config.mode.DEBUG) {
      ctx.body = `删除用户${id}成功`;
    } else {
      const result = await ctx.db.collection('users').deleteOne((v: User) => v.id == id);
      ctx.body = responseGenerator()();
    }
  });
};
