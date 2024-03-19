import service from '@/request/axios';
import { SearchUserWithPage, UserList } from '@/types/user_manage';

export function getUserList(params: SearchUserWithPage) {
  return service.get<UserList>('/user/list', {
    ...params,
  });
}
