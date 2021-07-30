const api = [
  {
    path: '/example',
    name: '示例',
    icon: 'smile',
    routes: [
      {
        path: 'example1',
        name: '示例1',
        component: '@/pages/example/example1',
      },
      {
        path: 'example2',
        name: '示例2',
        component: '@/pages/example/example2',
        access: 'canAccessAdmin', // 此菜单 管理员可见
      },
    ],
  },
];

export default api;