import { defineConfig } from 'dumi';

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;

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
            enforce: true,
            test(testConfit: any) {
              return /[\\/]node_modules[\\/]/.test(testConfit.resource);
            },
            priority: 10,
          },
          icons: {
            name: 'icons',
            chunks: 'all',
            enforce: true,
            test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
          },
          commons: {
            enforce: true,
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
  menus: {
    "/performance'": [
      {
        title: '性能优化1',
        children: [
          // 菜单子项（可选）
          'Performance/enginner-compress.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/enginner-image.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/enginner-index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/enginner-mini.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
      {
        title: '性能优化2',
        children: [
          // 菜单子项（可选）
          'Performance/code-index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/code-components.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/code-utils.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
      {
        title: '性能优化3',
        children: [
          // 菜单子项（可选）
          'Performance/experience-index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/experience-list.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/experience-request.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Performance/experience-white.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ],
  },
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
      title: '性能优化',
      path: '/performance',
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
    // plugins: [new BundleAnalyzerPlugin()],
    chunks: ['vendors', 'umi'],
    chainWebpack: (config: any) => chainWebpackPro(config),
  };
}

export default defineConfig(config);
