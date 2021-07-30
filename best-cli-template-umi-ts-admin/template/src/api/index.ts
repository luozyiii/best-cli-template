import { Http } from '@/utils';

const api = {
  getOssToken: (params: any) => Http({ url: '/groupbuy/upload/getHwObsTempToken', body: params || {} }),
};

export default api;
