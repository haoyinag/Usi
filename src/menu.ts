export default {
  // 规范
  '/standard': [
    {
      title: '简述',
    },
  ],
  // 组件
  '/components': [
    {
      title: '说明',
    },
    {
      title: 'Antd',
      children: [
        // 菜单子项（可选）
        'Components/Antd/Filter.md', // Filter 筛选组件
        'Components/Antd/TableProps.md', // table 组件
        'Components/Antd/TablePro.md', // Filter+table 整合
      ],
    },
  ],
  // 小程序
  '/miniapp': [
    {
      title: '原生',
      children: [
        // 菜单子项（可选）
        'Miniapp/Mini/components.md', // 组件
        'Miniapp/Mini/utils.md', // utils
      ],
    },
    {
      title: 'Taro',
      children: [
        'Miniapp/Taro/components.md', // 组件
        'Miniapp/Taro/utils.md', // utils
      ],
    },
    {
      title: 'UniApp',
      children: [
        'Miniapp/Uniapp/index.md', // 说明
      ],
    },
  ],
  // 性能优化
  '/performance': [
    {
      title: '工程',
      path: '/performance/code',
    },
    {
      title: '代码',
      path: '/performance/enginner',
    },
    {
      title: '体验',
      path: '/performance/experience',
    },
  ],
};
