import service from './request/axios';
import { LoginUserRes, LoginUserReq } from '@/types/user';

export function login(username: string, password: string) {
  return service.post<LoginUserRes, LoginUserReq>('/user/login', {
    username,
    password,
  });
}
