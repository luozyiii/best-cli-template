import { defineConfig } from 'umi';
const pxtoviewport = require('postcss-px-to-viewport');
import route from './src/router';

export default defineConfig({
  mfsu: {},
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
  dynamicImport: {
    loading: '@/components/Loading',
  },
  fastRefresh: {},
  extraPostCSSPlugins: [
    pxtoviewport({
      viewportWidth: 750,
      unitPrecision: 5,
      viewportUnit: 'vw',
      minPixelValue: 1,
      exclude: [/node_modules/],
    }),
  ],
});
