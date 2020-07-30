export default (config: any) => {
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
