import service from '@/request/axios';
import { SearchUserWithPage, UserList } from '@/types/user_manage';

export function getUserList(params: SearchUserWithPage) {
  return service.get<UserList>('/user/list', {
    ...params,
  });
}

export async function freeze(id: number) {
  return service.get('/user/freeze', {
    id,
  });
}
