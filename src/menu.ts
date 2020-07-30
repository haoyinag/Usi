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
        // 'Components/Antd/index.md',
        'Components/Antd/TablePro.md',
        'Components/Antd/TableProps.md',
        'Components/Antd/Filter.md',
      ],
    },
  ],
  // 小程序
  '/miniapp': [
    {
      title: '原生',
      children: [
        // 菜单子项（可选）
        'Miniapp/Mini/components.md',
        'Miniapp/Mini/utils.md',
      ],
    },
    {
      title: 'Taro',
      children: [
        // 菜单子项（可选）
        'Miniapp/Taro/components.md',
        'Miniapp/Taro/utils.md',
      ],
    },
    {
      title: 'UniApp',
      children: [
        // 菜单子项（可选）
        'Miniapp/Uniapp/index.md',
      ],
    },
  ],
  // 性能优化
  '/performance': [
    {
      title: '工程化',
      children: [
        // 菜单子项（可选）
        'Performance/enginner-index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/enginner-compress.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/enginner-image.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/enginner-mini.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
      ],
    },
    {
      title: '代码',
      children: [
        // 菜单子项（可选）
        'Performance/code-index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/code-components.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/code-utils.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
      ],
    },
    {
      title: '体验',
      children: [
        // 菜单子项（可选）
        'Performance/experience-index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/experience-list.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/experience-request.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'Performance/experience-white.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
      ],
    },
  ],
};
