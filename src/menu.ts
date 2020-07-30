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
      title: '工程化',
      children: [
        'Performance/enginner-index.md', // 说明
        'Performance/enginner-image.md', // 图片压缩
        'Performance/enginner-compress.md', // 打包压缩
        'Performance/enginner-mini.md', // 小程序
      ],
    },
    {
      title: '代码',
      children: [
        'Performance/code-index.md', // 说明
        'Performance/code-utils.md', // utils
        'Performance/code-components.md', // 组件
      ],
    },
    {
      title: '体验',
      children: [
        // 菜单子项（可选）
        'Performance/experience-index.md', // 说明
        'Performance/experience-white.md', // 白屏
        'Performance/experience-list.md', // 长列表
        'Performance/experience-request.md', // 请求反馈
      ],
    },
  ],
};
