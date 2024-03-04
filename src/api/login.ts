import service from './request/axios';
import { LoginUserRes, LoginUserReq } from '@/types/user';

export function login(username: string, password: string) {
  return service.post<LoginUserReq, LoginUserRes>('/user/login', {
    username,
    password,
  });
}
