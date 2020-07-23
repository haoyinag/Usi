export default [
  {
    path: '/',
    title: '首页',
    name: '首页', // 如果添加了name属性，会在路由表出现对应的路由item
    // redirect: "/index",
    exact: true, // 表示是否严格匹配，即 location 是否和 path 完全对应上
    component: '../../docs/index.md',
    // routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用
    // redirect 配置路由跳转
    // wrappers 配置路由的高阶组件封装。
    /**
           * wrappers: [
                  '@/wrappers/auth',
              ],
           */
  },
  {
    path: '/404',
    title: '页面丢失',
    exact: true,
    component: '../../docs/Basic/index.md', // () => import(/* webpackChunkName: "about" */ "../views/404.vue")
  },
];
