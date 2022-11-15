import { defHttp } from '/@/utils/http/axios';
import { GetUsersModel } from './model/userModel';

enum Api {
  GetUsers = '/users',
}

/**
 * @description: getUserInfo
 */
export function getUsers() {
  return defHttp.get<GetUsersModel>({ url: Api.GetUsers }, { errorMessageMode: 'none' });
}
