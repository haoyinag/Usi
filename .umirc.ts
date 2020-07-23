import { defineConfig } from 'dumi';

export default defineConfig({
  // mode: 'site',
  title: 'Angsi UUI',
  outputPath: 'docs-dist',
  menus: {
    '/basic': [
      {
        title: '基础',
      },
      {
        title: '基础',
        children: ['Basic/basic'],
      },
    ],
  },
  // routes,
  //  {
  //   '/blog': [
  //     {
  //       title: '简介',
  //     },
  //     {
  //       title: '辟邪剑谱',
  //       children: ['blog/test'],
  //     },
  //     {
  //       title: '降龙十八掌',
  //       children: ['blog/test2'],
  //     },
  //   ],
  // },
  // more config: https://d.umijs.org/config
});
