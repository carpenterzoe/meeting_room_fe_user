export type LoginUserRes = {
  accessToken: string;
  refreshToken: string;
  userInfo: Record<string, unknown>;
};

export interface LoginUserReq {
  username: string;
  password: string;
}

export interface UpdatePasswordType extends LoginUserReq {
  confirmPassword: string;
  email: string;
  captcha: string;
}

export interface RegisterUser extends UpdatePasswordType {
  nickName: string;
}

export interface UpdateUserInfo {
  headPic: string;
  nickName: string;
  email: string;
  captcha: string;
}
