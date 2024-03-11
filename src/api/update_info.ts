import service from '@/request/axios';
import { UpdateUserInfo } from '@/types/user';

export function updateUserCaptcha(address: string) {
  return service.get<string>('/user/update/captcha', {
    address,
  });
}

export function updateUserApi(userInfo: UpdateUserInfo) {
  return service.post('/user/update', userInfo);
}
