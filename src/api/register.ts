import service from '@/request/axios';
import { RegisterUser } from '@/types/user';

export function registerCaptcha(address: string) {
  return service.get<string>('/user/register-captcha', {
    address,
  });
}

export function register(registerUser: RegisterUser) {
  return service.post('/user/register', registerUser);
}
