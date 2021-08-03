import exampleRoute from './example';
const api: any = [
  {
    exact: true,
    path: '/login',
    name: '登录',
    component: '@/pages/login',
  },
  {
    path: '/',
    name: '首页',
    component: '@/pages/index',
  },
  ...exampleRoute, // 开发完需删除
  { component: '@/pages/404' },
];
export default api;
