/**
 * 用户模型
 * @param hc 房车情况 0-双无 1-有车无房 2-有房无车 3-有房有车
 */
export type User = {
  id?: string | number;
  name: string;
  vx: string;
  phone: string;
  hc: number;
};

export const defaultUser: User = {
  name: 'terry',
  vx: 'terryTang',
  phone: '13996091254',
  hc: 3,
};

export const userGenerator = (user?: Partial<User>) => {
  return {
    ...defaultUser,
    ...user,
  };
};
