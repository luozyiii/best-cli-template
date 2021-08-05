import { Http } from '@/utils';

const api = {
  getHotSearch: (params: any) => Http('/hot/search', { method: 'post', params }),
  getAbc: (params: any) => Http('/abc', { method: 'get', params }),
};

export default api;
