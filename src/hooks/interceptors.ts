import axios from 'axios';
import { getStorage } from '@/hooks/useStorage.js';

/**使用时用service代替axios */
const service = axios.create({
  baseURL: '',
  timeout: 10000,
});

/**这里给拦截器添加了一个请求头,jwt缓存来自于登录和注册时添加.后续每个service请求都带有这个头 */
service.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers['Authorization'] =
        `Bearer ${getStorage('jwt')}` || `Bearer `;
      return config;
    }else{
      console.error('config.headers is not available')
    }
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  },
);

export default service;
