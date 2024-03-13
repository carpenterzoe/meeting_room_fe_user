import { AxiosResponse } from 'axios';

export interface CommonRes<T = any> {
  code: number;
  data: T;
  msg: string;
}

export type MyAxiosRes<T> = AxiosResponse<CommonRes<T>>;
