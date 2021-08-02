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
      target: 'http://112.74.201.142:7001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  routes: [...route],
  fastRefresh: {},
});
