import service from '@/request/axios';
import { UpdateUserInfo } from '@/types/user';

export function updateUserCaptcha(address: string) {
  return service.get<string>('/user/update/captcha', {
    address,
  });
}

export function getUserInfo() {
  return service.get('/user/info');
}

export function updateUserApi(userInfo: UpdateUserInfo) {
  return service.post('/user/update', userInfo);
}
