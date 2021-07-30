import { defineConfig } from 'umi';
import route from './src/router';

export default defineConfig({
  mfsu: {},
  layout: {
    name: 'Umi中后台项目模板',
    logo: '/favicon.ico',
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
  routes: [...route],
  fastRefresh: {},
});
