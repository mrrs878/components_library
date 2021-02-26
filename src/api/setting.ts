/*
 * @Author: your name
 * @Date: 2021-02-24 14:24:50
 * @LastEditTime: 2021-02-26 11:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components_library/src/api/setting.ts
 */
import ajax from '../tool/ajax';

const BASE_URL = 'http://localhost:3000/setting';

export const GET_MENUS = (): Promise<GetMenusResI> => ajax.get(`${BASE_URL}/menu`);
export const GET_MENU = (data: GetMenuReqI): Promise<GetMenusResI> => ajax.get(`${BASE_URL}/menu/${data.role}`);
export const UPDATE_MENU = (data: UpdateMenuReqI): Promise<UpdateMenuResI> => ajax.put(`${BASE_URL}/menu/${data.id}`, data);
export const CREATE_MENU = (data: CreateMenuReqI): Promise<CreateMenuResI> => ajax.post(`${BASE_URL}/menu`, data);
