const route = [
  {
    path: '/example',
    name: '示例',
    icon: 'smile',
    routes: [
      {
        path: 'example1',
        name: '基础用法',
        component: '@/pages/example/example1',
      },
      {
        path: 'form',
        name: '表单用法',
        component: '@/pages/example/form',
      },
      {
        path: 'example2',
        name: '权限菜单',
        component: '@/pages/example/example2',
      },
    ],
  },
];

export default route;
