import { defineConfig } from 'dumi';

import menus from './src/menu';

export default defineConfig({
  // mode: 'site',
  title: 'Angsi UUI',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  menus,
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
