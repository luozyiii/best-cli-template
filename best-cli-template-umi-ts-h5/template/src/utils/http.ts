import request from 'umi-request';
import { Toast } from '@/components';
const proxy = '/api';

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return {
    url: `${proxy}${url}`,
    options: { ...options, interceptors: true },
  };
});

// 提前对响应做异常处理
request.interceptors.response.use(async (response) => {
  const res = await response.clone().json();
  if (res.status !== 200) {
    Toast.show(res.errMsg);
  }
  return response;
});

export default request;
