import { Http } from '@/utils';

// 默认 post请求
const api = {
  getOssToken: (params: any) => Http({ url: '/groupbuy/upload/getHwObsTempToken', body: params || {} }),
  getColumn: (params: any) => Http({ url: '/column/config/getPage', method: 'get', body: params || {} }),
};

export default api;
