import exampleApi from './example';
const api: any = [
  {
    exact: true,
    path: '/login',
    name: '登录',
    icon: 'home',
    component: '@/pages/login',
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
    // 不展示菜单顶栏
    menuHeaderRender: false,
    // 隐藏自己和子菜单
    hideInMenu: true,
  },
  {
    path: '/home',
    name: '首页',
    icon: 'home',
    component: '@/pages/index',
  },
  ...exampleApi, // 开发完需删除
  { component: '@/pages/404' },
];
export default api;
