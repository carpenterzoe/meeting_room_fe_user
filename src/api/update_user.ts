import service from '@/request/axios';
import { CommonUserInfo, UpdateUserInfo } from '@/types/user';

export function updateUserCaptcha(address: string) {
  return service.get<string>('/user/update/captcha', {
    address,
  });
}

export function getUserInfo() {
  return service.get<CommonUserInfo>('/user/info');
}

export function updateUserApi(userInfo: UpdateUserInfo) {
  return service.post('/user/update', userInfo);
}
