/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-10-15 09:49:52
 * @LastEditTime: 2021-04-11 15:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog_dashboard\src\interfaces\ajaxRes.d.ts
 */
interface BaseResI<T> {
  success: boolean;
  return_code: number;
  data: T;
  return_message: string;
}

interface ILoginRes extends BaseResI<UserI>{
}
interface GetInfoByTokenResI extends BaseResI<UserI>{
}
interface LogoutResI extends BaseResI<any>{
}
interface GetMenusResI extends BaseResI<Array<IMenuItem>>{
}
interface CreateMenuResI extends BaseResI<IMenuItem> {}

interface UpdateMenuResI extends BaseResI<IMenuItem> {}

interface IGetPuzzleImgRes extends BaseResI<{ canvas: string, block: string, session: string }> {}

interface ICheckPuzzleRes extends BaseResI<any> {}

interface IGetPermissionUrlsRes extends BaseResI<Array<IPermissionUrl>> {}

interface GetDictsResT extends BaseResI<Array<DictI>>{
}

interface GetDictResT extends BaseResI<DictI>{
}

interface GetAuthorCommentsResI extends BaseResI<Array<AuthorCommentsI>> {}

interface GetUsersResI extends BaseResI<Array<UserI>> {}

interface UpdateUserInfoResI extends BaseResI<UserI> {}

interface UpdateUserStatusI extends BaseResI<any> {}
