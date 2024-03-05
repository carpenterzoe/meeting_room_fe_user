export interface LoginUserReq {
  username: string;
  password: string;
}

export type LoginUserRes = {
  accessToken: string;
  refreshToken: string;
  userInfo: Record<string, unknown>;
};

export interface RegisterUser {
  username: string;
  nickName: string;
  password: string;
  confirmPassword: string;
  email: string;
  captcha: string;
}
