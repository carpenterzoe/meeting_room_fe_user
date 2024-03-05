import axios, { AxiosInstance } from 'axios';
import { message } from 'antd';
import { CommonRes } from '@/types/request';

class Request {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3005',
      method: 'get',
      timeout: 3000,
    });

    this.instance.interceptors.request.use();
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        message.error(error.response?.data.message || '系统繁忙，请稍后再试');
        return Promise.reject(error);
      },
    );
  }

  public get<T = any>(url: string, params: any): Promise<CommonRes<T>> {
    return this.instance.get(url, { params });
  }

  // 把返回结构改成了响应器解构后的结构
  public post<D = any, T = any>(url: string, data?: D): Promise<CommonRes<T>> {
    return this.instance.post(url, data);
  }
}

export default new Request();
