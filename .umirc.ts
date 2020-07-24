import { defineConfig } from 'dumi';

// import menus from './src/menu';
// import routes from './src/router';

export default defineConfig({
  base: '/AngsiUUI',
  publicPath: '/AngsiUUI/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  mode: 'site',
  title: 'UUI',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',

  // menus,
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'Hooks',
      path: '/hooks',
    },
    {
      title: 'Utils',
      path: '/utils',
    },
    {
      title: '请求',
      path: '/services',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/haoyinag/AngsiUUI',
    },
    {
      title: '简书',
      path: 'https://www.jianshu.com/u/c53f3aed0c06',
    },
  ],
  // more config: https://d.umijs.org/config
});
