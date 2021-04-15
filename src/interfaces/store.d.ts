/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-02-24 09:45:17
 * @LastEditTime: 2021-04-15 22:42:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dashboard_template/src/interfaces/index.d.ts
 */
interface IUser {
  name: string;
  age: number;
}

interface IState {
  fullScreen: boolean;
  user: IUser;
  addresses?: Array<string>;
  menu: Array<IMenuItem>;
  menuArray: Array<IMenuItem>,
  menuRoutes: Record<string, string>;
  menuTitles: Record<string, string>;
  permissionUrls: Array<IPermissionUrl>;
  tags: Array<ITag>,
}

interface IActions<T extends Actions, P> {
  type: T;
  data: P;
}
