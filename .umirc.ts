import { defineConfig } from 'dumi';

// import menus from './src/menu';
// import routes from './src/router';

const env = process.env.NODE_ENV;

const chainWebpackPro = (config: any) => {
  /** 打包优化 */
  config.merge({
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 3,
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test(testConfit: any) {
              return /[\\/]node_modules[\\/]/.test(testConfit.resource);
            },
            priority: 10,
          },
          icons: {
            name: 'icons',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
          },
          commons: {
            name: 'commons',
            chunks: 'async',
            minChunks: 2,
            minSize: 0,
          },
        },
      },
    },
  });
  return config;
};

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
      title: '小程序',
      path: '/miniapp',
    },
    {
      title: 'Mine',
      children: [
        {
          title: 'GitHub',
          path: 'https://github.com/haoyinag/AngsiUsi',
        },
        {
          title: '简书',
          path: 'https://www.jianshu.com/u/c53f3aed0c06',
        },
      ],
      // path: 'https://github.com/haoyinag/AngsiUsi',
    },
  ],
  // more config: https://d.umijs.org/config
};

if (env === 'production') {
  config = {
    ...config,
    // chunks: ['vendors', 'umi'],
    chainWebpack: (config: any) => chainWebpackPro(config),
  };
}

export default defineConfig(config);
