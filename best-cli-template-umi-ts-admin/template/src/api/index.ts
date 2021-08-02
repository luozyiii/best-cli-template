import { Http } from '@/utils';

// 默认 post请求
const api = {
  getHotSearch: (params: any) => Http({ url: '/hot/search', body: params || {} }),
  getAbc: (params: any) => Http({ url: '/abc', method: 'get', body: params || {} }),
};

export default api;
