export interface LoginUserReq {
  username: string;
  password: string;
}

export type LoginUserRes = {
  accessToken: string;
  refreshToken: string;
  userInfo: Record<string, unknown>;
};
