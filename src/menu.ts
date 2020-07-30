// export default {
//   '/Utils': [
//     {
//       title: 'Utils',
//       children: [
//         'Utils/type',
//         'Utils/pattern',
//         'Utils/navigator',
//         'Utils/numberoperate',
//         'Utils/stringoperate',
//         'Utils/objectoperate',
//         'Utils/domoperate',
//         'Utils/files',
//         'Utils/algorithm',
//       ],
//     },
//   ],
//   '/Hooks': [
//     {
//       title: 'Hooks',
//       children: ['Hooks/useClock', 'Hooks/useChecked', 'Hooks/useDoubleClick'],
//     },
//   ],
//   '/Services': [
//     {
//       title: 'Services',
//       children: ['Services/umirequest', 'Services/axios', 'Services/flyio'],
//     },
//   ],
// };

export default {
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
