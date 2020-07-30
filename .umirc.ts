import { defineConfig } from 'dumi';

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;

import chainWebpackPro from './config/chainWebpack';

import navs from './src/navs';
import menus from './src/menu';
// import routes from './src/router';

const env = process.env.NODE_ENV;

let config: any = {
  base: '/',
  publicPath: '/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  mode: 'site',
  title: 'Usi',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'dist',
  menus,
  navs,
  // more config: https://d.umijs.org/config
};

if (env === 'production') {
  config = {
    ...config,
    // plugins: [new BundleAnalyzerPlugin()],
    chunks: ['vendors', 'umi'],
    chainWebpack: (config: any) => chainWebpackPro(config),
  };
}

export default defineConfig(config);
