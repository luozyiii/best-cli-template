import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: {},
  layout: {
    name: 'Umi中后台项目模板',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy: {
    '/api': {
      target: 'http://admin.chenxuan100.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  routes: [
    {
      path: '/',
      name: '首页',
      icon: 'home',
      component: '@/pages/index',
    },
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
        },
      ],
    },
  ],
  fastRefresh: {},
});
