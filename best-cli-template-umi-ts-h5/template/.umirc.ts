import { defineConfig } from 'umi';
const pxtoviewport = require('postcss-px-to-viewport');
import route from './src/router';

export default defineConfig({
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
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
