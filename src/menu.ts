export default {
  // 工具函数
  '/utils': [
    {
      title: '正则 Pattern',
      path: '/utils/pattern',
    },
    {
      title: '值类型',
      path: '/utils/type',
    },
    {
      title: '数字操作',
      path: '/utils/numberoperate',
    },
    {
      title: '字符串操作',
      path: '/utils/stringoperate',
    },
    {
      title: '复杂类型操作',
      path: '/utils/objectoperate',
    },
    {
      title: '文件操作',
      path: '/utils/files',
    },
    {
      title: '页面操作',
      path: '/utils/domoperate',
    },
    {
      title: '端丨判断',
      path: '/utils/navigator',
    },
    {
      title: '工具函数',
      path: '/utils/tools',
    },
  ],
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
      path: '/performance/enginner',
    },
    {
      title: '代码',
      path: '/performance/code',
    },
    {
      title: '体验',
      path: '/performance/experience',
    },
  ],
};
