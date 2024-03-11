import service from '@/request/axios';
import { UpdatePasswordType } from '@/types/user';

export function updatePasswordCaptcha(email: string) {
  return service.get<string>('/user/update_password/captcha', {
    address: email,
  });
}

export function updatePasswordApi(data: UpdatePasswordType) {
  return service.post<UpdatePasswordType, string>(
    '/user/update_password',
    data,
  );
}
