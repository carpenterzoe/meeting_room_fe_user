import axios, { AxiosInstance } from 'axios';
import { message } from 'antd';
import { MyAxiosRes } from '@/types/request';

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
        // console.log('response data: ', response.data);
        return response.data;
      },
      (error) => {
        message.error(error.response?.message || '系统繁忙，请稍后再试');
      },
    );
  }

  public get<T = any>(url: string, params: any): Promise<MyAxiosRes<T>> {
    return this.instance.get(url, { params });
  }

  public post<T = any, D = any>(url: string, data?: D): Promise<MyAxiosRes<T>> {
    return this.instance.post(url, data);
  }
}

export default new Request();
