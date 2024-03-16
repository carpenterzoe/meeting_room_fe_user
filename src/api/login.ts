import service from '@/request/axios';
import { LoginUserRes, LoginUserReq } from '@/types/user';

export function login(username: string, password: string, loginType: string) {
  const url = loginType === '1' ? '/user/login' : '/user/admin/login';
  return service.post<LoginUserReq, LoginUserRes>(url, {
    username,
    password,
  });
}
