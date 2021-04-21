/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-02-24 14:31:07
 * @LastEditTime: 2021-04-21 19:00:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dashboard_template/src/interfaces/model.d.ts
 */
interface IMenuItem {
  id?: number;
  key: string;
  icon?: Object;
  icon_name?: string;
  title: string;
  path: string;
  children?: Array<IMenuItem>;
  parent: number;
  role?: Array<number>;
  status: number;
  position: number;
}

interface IPermissionUrl {
  id: number;
  url: string;
  role: number;
}

interface IUser {
  id: number;
  name: string;
  age: number;
  address: string;
  role: number;
}

interface ITag {
  path: string;
  title: string;
}

type ErrorType = IJSRunTimeError|IAssetsError;

interface IBaseErrorInfo {
  title: string;
  location: string;
  kind: string;
  type: string;
  errorType: string;
}

interface IJSRunTimeError extends IBaseErrorInfo {
  filename: string;
  position: string;
  stack: string;
  selector: string;
}

interface IAssetsError extends IBaseErrorInfo {
  url: string;
  nodeName: string;
}

interface IAjaxError extends IBaseErrorInfo {
  response: string;
  status: number;
  method: string;
  url: string;
}

interface IPromiseError extends IBaseErrorInfo {
  message: string;
  stack: string;
}
