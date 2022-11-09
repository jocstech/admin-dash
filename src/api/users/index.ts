import { defHttp } from '/@/utils/http/axios';
import { GetUsersModel } from './model/userModel';

enum Api {
  GetUsers = '/users',
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUsersModel>({ url: Api.GetUsers }, { errorMessageMode: 'none' });
}
