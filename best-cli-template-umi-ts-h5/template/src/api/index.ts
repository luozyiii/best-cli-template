import request from '@/utils/http';

const api = {
  getHotSearch: (params: any) => request('/hot/search', { method: 'post', params }),
  getAbc: (params: any) => request('/abc', { method: 'get', params }),
};

export default api;
