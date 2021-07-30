import exampleApi from './example';
const api: any = [
  {
    path: '/',
    name: '首页',
    icon: 'home',
    component: '@/pages/index',
  },
  ...exampleApi, // 开发完需删除
];
export default api;
